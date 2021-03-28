import { Component } from '@angular/core';

enum LEVELS {
    GOOD = '◎',
    NORMAL = '○',
    HAVE_EXPERIENCE = '△',
    HOBBY = '☆',
}

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss', '../shared/styles.scss'],
})
export class SkillsComponent {
    public skills = [
        { category: 'language', name: 'typescript', level: LEVELS.GOOD },
        { category: 'language', name: 'javascript', level: LEVELS.GOOD },
        { category: 'language', name: 'Java', level: LEVELS.NORMAL },
        { category: 'language', name: 'PHP', level: LEVELS.GOOD },
        { category: 'language', name: 'C', level: LEVELS.NORMAL },
        { category: 'language', name: 'C++', level: LEVELS.NORMAL },
        { category: 'framework', name: 'Angular', level: LEVELS.GOOD },
        { category: 'framework', name: 'Vue.js', level: LEVELS.GOOD },
        { category: 'framework', name: 'NestJS', level: LEVELS.GOOD },
        { category: 'framework', name: 'Nuxt.js', level: LEVELS.HOBBY },
        { category: 'framework', name: 'Laravel', level: LEVELS.GOOD },
        { category: 'framework', name: 'ZendFW', level: LEVELS.HAVE_EXPERIENCE },
        { category: 'framework', name: 'Flutter', level: LEVELS.HOBBY },
        { category: 'framework', name: 'Monaca', level: LEVELS.HOBBY },
        { category: 'framework', name: 'CocosCreator', level: LEVELS.HOBBY },
        { category: 'ui-component', name: 'Bootstrap', level: LEVELS.NORMAL },
        { category: 'ui-component', name: 'PrimeNG', level: LEVELS.NORMAL },
        { category: 'ui-component', name: 'ElementUI', level: LEVELS.NORMAL },
        { category: 'ui-component', name: 'Vuetify', level: LEVELS.NORMAL },
        { category: 'ui-component', name: 'Angular Material', level: LEVELS.HOBBY },
        { category: 'architecture', name: 'AWS EC2', level: LEVELS.NORMAL },
        { category: 'architecture', name: 'AWS RDB', level: LEVELS.NORMAL },
        { category: 'architecture', name: 'AWS DynamoDB', level: LEVELS.HAVE_EXPERIENCE },
        { category: 'architecture', name: 'AWS S3', level: LEVELS.HAVE_EXPERIENCE },
        { category: 'architecture', name: 'AWS Lambda', level: LEVELS.HAVE_EXPERIENCE },
        { category: 'architecture', name: 'AWS API Gateway', level: LEVELS.HAVE_EXPERIENCE },
        { category: 'architecture', name: 'AWS CloudWatch', level: LEVELS.HAVE_EXPERIENCE },
        { category: 'architecture', name: 'AWS ElasticBreansTalk', level: LEVELS.NORMAL },
        { category: 'architecture', name: 'AWS SES', level: LEVELS.NORMAL },
        { category: 'architecture', name: 'AWS Route53', level: LEVELS.NORMAL },
        { category: 'architecture', name: 'Firestore', level: LEVELS.HOBBY },
        { category: 'architecture', name: 'FirebaseHosting', level: LEVELS.HOBBY },
        { category: 'architecture', name: 'FirebaseAuthorization', level: LEVELS.HOBBY },
        { category: 'architecture', name: 'Heroku', level: LEVELS.HAVE_EXPERIENCE },
        { category: 'architecture', name: 'docker', level: LEVELS.HAVE_EXPERIENCE },
        { category: 'architecture', name: 'docker-compose', level: LEVELS.HAVE_EXPERIENCE },
        { category: 'architecture', name: 'VirtualBOX', level: LEVELS.HAVE_EXPERIENCE },
        { category: 'architecture', name: 'vagrant', level: LEVELS.HAVE_EXPERIENCE },
        { category: 'develop', name: 'GitHub', level: LEVELS.NORMAL },
        { category: 'develop', name: 'GitLab', level: LEVELS.NORMAL },
        { category: 'develop', name: 'Git', level: LEVELS.NORMAL },
        { category: 'develop', name: 'VS Code', level: LEVELS.NORMAL },
        { category: 'develop', name: 'Lerna', level: LEVELS.NORMAL },
        { category: 'API', name: 'OpenAPI', level: LEVELS.NORMAL },
        { category: 'API', name: 'MS GraphAPI', level: LEVELS.HOBBY },
    ];

    get infos() {
        const filter = (level: LEVELS) => this.skills.filter((item) => item.level === level);
        return [
            { name: '得意', skills: filter(LEVELS.GOOD) },
            { name: 'そこそこ得意', skills: filter(LEVELS.NORMAL) },
            { name: '業務経験あり', skills: filter(LEVELS.HAVE_EXPERIENCE) },
            { name: '趣味で触った', skills: filter(LEVELS.HOBBY) },
        ];
    }
    get goodSkills() {
        return this.skills.filter((item) => item.level === LEVELS.GOOD);
    }
    get normalSkills() {
        return this.skills.filter((item) => item.level === LEVELS.NORMAL);
    }
    get haveExperienceSkills() {
        return this.skills.filter((item) => item.level === LEVELS.HAVE_EXPERIENCE);
    }
    get hobbySkills() {
        return this.skills.filter((item) => item.level === LEVELS.HOBBY);
    }
}
