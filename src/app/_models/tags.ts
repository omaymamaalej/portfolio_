export class Tag {

  static readonly ANGULAR = new Tag('Angular', '#5a7581', 'https://angular.io');
  static readonly POSTMAN = new Tag('Postman', '#355158', 'https://www.postman.com');
  static readonly AI = new Tag('AI', '#355158', '');
  static readonly TYPESCRIPT = new Tag('TypeScript', '#192129', 'https://www.typescriptlang.org');
  static readonly JAVASCRIPT = new Tag('JavaScript', '#192129', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript');
  static readonly HTML5 = new Tag('HTML5', '#192129', 'https://developer.mozilla.org/en-US/docs/Web/HTML');
  static readonly CSS3 = new Tag('CSS3', '#192129', 'https://developer.mozilla.org/en-US/docs/Web/CSS');
  static readonly SPRINGBOOT = new Tag('Spring Boot', '#192129', 'https://spring.io/projects/spring-boot');
  static readonly BOOTSTRAP = new Tag('Bootstrap', '#192129', 'https://getbootstrap.com');
  static readonly MONGODB = new Tag('MongoDB', '#4a6a77', 'https://www.mongodb.com');
  static readonly MYSQL = new Tag('MySQL', '#4a6a77', 'https://www.mysql.com');
  static readonly JUNIT = new Tag('JUnit', '#5a7581', 'https://junit.org');
  static readonly DOCKER = new Tag('Docker', '#355158', 'https://www.docker.com');
  static readonly GEMINI = new Tag('Gemini AI', '#457189', 'https://deepmind.google/technologies/gemini/');
  static readonly JHIPSTER = new Tag('JHipster', '#192129', 'https://www.jhipster.tech');

  private constructor(
    private readonly key: string,
    public readonly color: string,
    public readonly link?: string
  ) {}

  toString() {
    return this.key;
  }

  static getAllTags(): Tag[] {
    return [
      this.ANGULAR,
      this.POSTMAN,
      this.AI,
      this.TYPESCRIPT,
      this.JAVASCRIPT,
      this.HTML5,
      this.CSS3,
      this.SPRINGBOOT,
      this.BOOTSTRAP,
      this.MONGODB,
      this.MYSQL,
      this.JUNIT,
      this.DOCKER,
      this.GEMINI,
      this.JHIPSTER
    ];
  }
}