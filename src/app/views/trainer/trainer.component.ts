import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.scss']
})
export class TrainerComponent implements OnInit {

  trainerfaq: any = [
    {
      id: 1,
      num: '01',
      title: 'How long does my subscription last?',
      description: 'Your subscription will renew automatically at the end of each subscription billing period unless you cancel your subscription.'
    },
    {
      id: 2,
      num: '02',
      title: 'Do you have a free trial?',
      description: 'Your subscription will renew automatically at the end of each subscription billing period unless you cancel your subscription.'
    },
    {
      id: 3,
      num: '03',
      title: 'What can I do if I’m stuck on a learning task?',
      description: 'Your subscription will renew automatically at the end of each subscription billing period unless you cancel your subscription.'
    },
    {
      id: 4,
      num: '04',
      title: 'How do I download videos for offline viewing?',
      description: 'Your subscription will renew automatically at the end of each subscription billing period unless you cancel your subscription.'
    },
    {
      id: 5,
      num: '05',
      title: 'What if I have a question that isn’t ansered here?',
      description: 'Your subscription will renew automatically at the end of each subscription billing period unless you cancel your subscription.'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
