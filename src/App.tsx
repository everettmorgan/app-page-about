import { Options, Vue } from 'vue-class-component';
import Btn from './components/Btn';
import Grid from './components/Grid';
import Flexbox from './components/Flexbox';
import './App.css';

@Options({
  components: {
    Btn,
    Grid,
    Flexbox,
  },
  props: {
    desc: String,
    website: String,
    getSupport: String,
    privacyPolicy: String,
    supportArticle: String,
    supportedLangs: String,
    supportedCountries: String,
    marketingResources: String,
  },
})

class App extends Vue {
  desc!: string;

  website!: string;

  getSupport!: string;

  supportArticle!: string;

  privacyPolicy!: string;

  supportedLangs!: string;

  supportedCountries!: string;

  marketingResources!: string;

  noStylesHtml() {
    return this.desc.replace(/style="[^"]+"/g, '').replace(/<br\/?>/g, '');
  }

  render() {
    return (
      <Grid id="container" columns="2fr 1fr" gap="75px" rows="1fr">

        <span class="appAboutDesc" v-html={this.noStylesHtml()}/>

        <Flexbox justifyContent="right">
          <div>
            <Grid class="appAboutPanel" columns="1fr" rows="repeat(4, max-content)">
              <h2>Details</h2>
              <Flexbox flexDirection="column">
                <h2 class="appAboutPanelSub">Helpful Links</h2>
                <a href={this.website} class="helpfulLink">Website</a>
                <a href={this.supportArticle} class="helpfulLink">Support Article</a>
                <a href={this.marketingResources} class="helpfulLink">Marketing Resources
                </a>
                <a href={this.privacyPolicy} class="helpfulLink">Privacy Policy</a>
                <a href={this.getSupport} class="helpfulLink">Get Support</a>
              </Flexbox>
              <div>
                <h2 class="appAboutPanelSub">Supported Languages</h2>
                <p class="supportedLangs">{this.supportedLangs}</p>
              </div>
              <div>
                <h2 class="appAboutPanelSub">Supported Countries</h2>
                <p class="supportedCountries">{this.supportedCountries}</p>
              </div>
            </Grid>
          </div>
        </Flexbox>
      </Grid>
    );
  }
}

export default App;
