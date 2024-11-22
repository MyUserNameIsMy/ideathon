import {AfterViewChecked, Component, inject, OnInit, signal, ViewChild} from '@angular/core';
import {ScrollPanel, ScrollPanelModule} from 'primeng/scrollpanel';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MessageService} from 'primeng/api';
import {FloatLabelModule} from 'primeng/floatlabel';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {Button} from 'primeng/button';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    ScrollPanelModule,
    ReactiveFormsModule,
    FloatLabelModule,
    InputTextareaModule,
    FormsModule,
    Button
  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent implements OnInit, AfterViewChecked {
  BASE_URL = 'http://localhost:3000';

  shouldScroll: boolean = false;
  @ViewChild('scrollPanel') scrollPanel!: ScrollPanel;
  messages = signal([{
    role: 'Assistant',
    message: 'Hello, how can I help you?'
  }]);
  message = '';


  private readonly messageService = inject(MessageService)
  private readonly httpService = inject(HttpClient)

  ngOnInit() {

  }

  ngAfterViewChecked() {
    if (this.shouldScroll) {
      this.scrollToBottom();
      this.shouldScroll = false;
    }
  }

  scrollToBottom() {
    if (this.scrollPanel) {
      this.scrollPanel.scrollTop(this.scrollPanel.contentViewChild?.nativeElement.scrollHeight);
    }
  }


  onsubmit() {
    this.messages().push({
      message: this.message,
      role: 'User'
    })
    this.httpService.post(`${this.BASE_URL}/message`, {
      message: this.message,
      thread_id: localStorage.getItem('thread_id')
    }).subscribe({
      next: (res:any) => {
        console.log(res.data)
        this.messages().push({
          role: 'Assistant',
          message: res.data.response
        })

        if(res.data.thread_id){
          localStorage.setItem('thread_id', res.data.thread_id);
        }
        this.message = ''
      },
      error: err => {
        console.log(err);
        this.messageService.add({severity: 'error', summary: 'Error', detail: err.message})
      }
    })
    console.log(this.message);
  }
}
