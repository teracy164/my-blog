import { Component } from '@angular/core';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
    public skills = [
        { category: 'language', name: 'typescript', level: '◎' },
        { category: 'language', name: 'javascript', level: '◎' },
        { category: 'language', name: 'Java', level: '◎' },
        { category: 'language', name: 'PHP', level: '◎' },
        { category: 'language', name: 'C', level: '◎' },
        { category: 'language', name: 'C++', level: '◎' },
        { category: 'framework', name: 'Angular', level: '◎' },
        { category: 'framework', name: 'NestJS', level: '◎' },
        { category: 'framework', name: 'Nuxt.js', level: '○' },
        { category: 'framework', name: 'Laravel', level: '○' },
        { category: 'framework', name: 'ZendFW', level: '△' },
        { category: 'framework', name: 'Flutter', level: '○' },
        { category: 'framework', name: 'Monaca', level: '○' },
        { category: 'framework', name: 'CocosCreator', level: '○' },
        { category: 'library', name: 'Bootstrap', level: '○' },
        { category: 'library', name: 'PrimeNG', level: '○' },
        { category: 'library', name: 'Angular Material', level: '○' },
        { category: 'library', name: 'Vue.js', level: '○' },
        { category: 'architecture', name: 'AWS', level: '○', note: 'EC2,Route53,ElasticBreansTalk,RDB(PostgreSQL)' },
        { category: 'architecture', name: 'Firebase', level: '○', note: 'Hosting,Firestore' },
        { category: 'architecture', name: 'Heroku', level: '○' },
        { category: 'architecture', name: 'docker', level: '○' },
        { category: 'develop', name: 'GitHub', level: '○' },
        { category: 'develop', name: 'GitLab', level: '○', note: 'オンプレ構築および運用' },
        { category: 'develop', name: 'Git', level: '○' },
        { category: 'develop', name: 'VS Code', level: '○' },
        { category: 'develop', name: 'Lerna', level: '○' },
        { category: 'API', name: 'OpenAPI', level: '○' },
        { category: 'API', name: 'MS GraphAPI', level: '○' },
    ];
}
