
export class Tag {
    static readonly ANGULAR = new Tag('Angular', '#5a7581');
   static readonly POSTMAN = new Tag('Postman', '#355158');
    static readonly AI = new Tag('AI', '#355158');
    static readonly TYPESCRIPT = new Tag('Typescript', '#192129');
    static readonly JAVASCRIPT = new Tag('Javascript', '#192129');
    static readonly HTML5 = new Tag('HTML5', '#192129');
    static readonly CSS3 = new Tag('CSS3', '#192129');
      static readonly SPRINGBOOT = new Tag('CSS3', '#192129');
    static readonly BOOTSTRAP = new Tag('Bootstrap', '#192129');
     static readonly MongoDB = new Tag('MongoDB', '#4a6a77');
     static readonly MySQL = new Tag(' MySQL', '#4a6a77');
      static readonly JUNIT = new Tag('JUnit', '#5a7581');
    static readonly DOCKER = new Tag('Docker', '#355158');
    static readonly Gemini = new Tag('Gemini', '#457189' );
static readonly JHIPSTER = new Tag('Bootstrap', '#192129');





    private constructor(private readonly key: string, public readonly color: string) {
    }

    toString() {
        return this.key;
    }

}