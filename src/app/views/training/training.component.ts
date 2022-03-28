import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {

  programs: any = [
    {
      id: 1,
      num: '01',
      title: 'Induction Programme',
      src: 'assets/img/program_01.jpg',
      link: '/training',
      description: '<p>Are you a person interested in the Social Work profession, but doesn’t know much about it? Let us help you. Don’t jump into a course, just for knowing what it is.</p><p>Our Induction Programme gives a comprehensive concept about the bachelor and Masters of Social Work, including the briefing of the syllabus, course structure, major aspects and scope of the course etc. By the end of the session you will have an in-depth understanding about the social work course from a professional perspective.</p>'
    },
    {
      id: 2,
      num: '02',
      title: 'Art of Thinking',
      src: 'assets/img/program_01.jpg',
      link: '/training',
      description: '<p>The mindset of a Social Worker has to be well moulded with the values and principles of Social Work, then only we can practice with a deep-dyed professional and bias-free state of mind.</p><p>Art of Thinking sessions helps the social workers to explore different perspectives and paradigms which will help to develop a positive mindset. By the end of the session you will be able to recognise values of social work and demonstrate the knowledge within the framework of professional competencies.</p>'
    },
    {
      id: 3,
      num: '03',
      title: 'ICT tools for effective Social Work Practises',
      src: 'assets/img/program_01.jpg',
      link: '/training',
      description: '<p>We live in the century of Information & Communication Technologies. To impart our services effectively, we need to learn the art of blending ICT with our professional affairs.</p><p>By the end of this session you will be aware of the platforms like KoBo Toolbox, Effective Social Media usage, Basic Designing Platforms and effectively make use of it for professional as well as personal purposes.</p>'
    },
    {
      id: 4,
      num: '04',
      title: 'Effective PowerPoint Presentation',
      src: 'assets/img/program_01.jpg',
      link: '/training',
      description: '<p>Presentations are a great way to communicate and connect directly with people. Regardless of the content, it is important you capture the interest of your audience, and PowerPoint is a great tool to do that.</p><p>By attending this session you will be able to design and deliver effective presentations on your own.</p>'
    },
    {
      id: 5,
      num: '05',
      title: 'SPSS and Research Methodology',
      src: 'assets/img/program_01.jpg',
      link: '/training',
      description: '<p>Research is one of the most powerful methods of social work. It helps to explore and develop concepts, methods and subject advancement in course of time. For accurate research results, we must know to scientifically analyse the data.</p><p>You will have in-depth understanding about research methodology and hands-on training on SPSS by the end of the session.</p>'
    },
    {
      id: 6,
      num: '06',
      title: 'Casework & Group work',
      src: 'assets/img/program_01.jpg',
      link: '/training',
      description: '<p>Casework and Group work are the major two methods of social work. One has to be extremely careful while handling a casework or group work session. Our mistakes and inattentiveness may cause adverse effects on the client’s mental health.</p><p>You will develop a strong theoretical base of casework and group work in accordance with the professional standards, by practising both methods in a simulative environment.</p>'
    },
    {
      id: 7,
      num: '07',
      title: 'Project Proposal',
      src: 'assets/img/program_01.jpg',
      link: '/training',
      description: '<p>Proposal writing requires a strong theoretical base, creative thinking and a set of skills collectively called Proposal writing skills. This session helps to develop an idea about Project Proposal Writing.</p><p>By the end of the session you will be able to design and write a project proposal on your own in accordance with corporate standards.</p>'
    },
    {
      id: 8,
      num: '08',
      title: 'Participatory Rural Appraisal(PRA) & RRA',
      src: 'assets/img/program_01.jpg',
      link: '/training',
      description: '<p>PRA is a growing combination of approaches and methods that facilitate the sharing, cross-fertilization, analysis, evaluation and enhancement of livelihood experiences and life conditions among key actors or stakeholders within a specified setting.</p><p>You will be aware of the theoretical and practical knowledge about PRA/RRA and you will be able to conduct it on your own.</p>'
    },
    {
      id: 9,
      num: '09',
      title: 'Life Skill Training',
      src: 'assets/img/program_01.jpg',
      link: '/training',
      description: '<p>Life Skills are essential for everyone. It helps to develop our personal and professional selves. To consciously practise life skills, one must acquire proper awareness about them at first.</p><p>You will have an understanding about Life Skills and situation based examples will provide deeper understanding of how to practise them in our daily life.</p>'
    },
    {
      id: 10,
      num: '10',
      title: 'Sex Education',
      src: 'assets/img/program_01.jpg',
      link: '/training',
      description: '<p>It’s high time to have proper sex education. As social workers, we are obliged to have a sex-positive attitude to help others without a biased and stereotypical mindset.</p><p>The session will create awareness about sex, gender, body and related topics.</p>'
    },
    {
      id: 11,
      num: '11',
      title: 'Professional Grooming',
      src: 'assets/img/program_01.jpg',
      link: '/training',
      description: '<p>Professionalism is a lifestyle. We have to develop it through conscious actions and practising it in our day to day life.</p><p>This session explains the professional attitudes and behaviour social workers have to maintain, from basic professional dressing styles to mock interview sessions and CV preparation.</p>'
    },
  ];

  trainingfaq: any = [
    {
      id: 1,
      num: '01',
      title: 'Who takes the training?',
      description: 'We have a team of skilled trainers and social professionals. Together we develop and design the training objectives and content. We have master trainers; internationally certified trainers (Asian College of Teachers: Master Trainer Certification).'
    },
    {
      id: 2,
      num: '02',
      title: 'What is the importance of training?',
      description: 'Social work is a practice based profession. So the social worker has to equip themselves with a professional set of skills and knowledge and has to polish as the trends and technology change. Our quality assured training programs will help you for this.'
    },
    {
      id: 3,
      num: '03',
      title: 'Are the training programs only for social workers?',
      description: 'No, even though social work is our prime domain we provide training services to the public also. Training related enquiries and bookings can be done through our website or by direct phone calls.'
    },
    {
      id: 4,
      num: '04',
      title: 'Can the interns be a part of training programs?',
      description: 'Yes, the internship program has mandatory training sessions. Interns can opt for additional training sessions by customising their internship package.'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
