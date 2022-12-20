import { useEffect, useRef } from "react";
import "./Home.scss";



const Home = () => {
  const overlayRef = useRef();

  const openSearch = () => {
    overlayRef.current.style.width = '100%';
  };

  const closeSearch = () => {
    overlayRef.current.style.width = '0%';
  };

  const destroy = () => {
    //call python script and generate a poem
    pyscript.write("output", "you clicked the button");
    console.log("hey")
  };

  const destroySlowly = () => {
    overlayRef.current.style.width = '100%';
  };

  return (
    <div className="home">
      <h1>Facebook (as) the center (will) not hold... </h1>
      <h3>erasing big tech from the center as a starting point for reconstructing public discourse</h3>
      <button onClick={openSearch} className='open-button'>
        the backstory on this project...
      </button>
      <button className='destroy-button' id='destroy-button' onClick={destroy}>
        let's destroy and reconstruct all at once!
      </button>
      <button onClick={destroySlowly} className='destroy-slowly-button'>
        let's destroy and reconstruct slowly and painfully...
      </button>
      <div id="output"></div>
      <div
        dangerouslySetInnerHTML={{
          __html: `<py-script src="./code_poetry/methodsofdestruction.py">
            </py-script>`,
        }}
      />
      <p>
        Facebook Enables Users to Share Video, Photos, News, Blogs and
        More from Anywhere on the Web
        October 31, 2006
        PALO ALTO, Calif. - Oct. 31, 2006
        - Facebook, the Internet's leading social utility,
        today announced that for the first time people can access Facebook's share
        functionality on multiple web sites to share video, photos, news and other content
        with their friends on Facebook. Web sites that add a link to share on Facebook will
        enable people to distribute content by posting it on their Facebook profiles or by
        sending it to specific Facebook friends without ever leaving the original website.
        Baron's Online, Boston.com, CollegeHumor.com, eBaumsworld.com, edgeio,
        GameSpot.com, Geffen, IDG Entertainment, The Internet Movie Database (IMDb),
        Jumpcut.com, MarketWatch.com, Miniclip.com, NBCSports.com, The New York Times,
        People.com, Photobucket, PureVideo Networks, Sl.com, TerraPass Inc., The Onion,
        Time.com, TV.com, U.S. News & World Report, The Wall Street Journal Online,
        Washingtonpost.com, and Ziff Davis Media are among the first sites to include a link
        to share on Facebook. "People share interesting content on the Web and on Facebook
        all the time. Now we're making the sharing process more efficient by giving people a
        simple structure to do it in," said Mark Zuckerberg, founder and CEO, Facebook.
        "We're partnering with some good companies to make it easier for people to share
        those websites' content through Facebook." When a Facebook user is surfing the Web
        and clicks on the link to share on Facebook, a share box pops up with a preview of
        the content that will be sent. Users make some choices about how and to whom they
        want to share specific content and Facebook's share functionality distributes that
        content to the appropriate users' accounts. To add the link to share on Facebook to
        your website, please visit www.facebook.com/share_partners.php.
      </p>
      <div ref={overlayRef} class='overlay'>
        <button class='close-button' onClick={closeSearch}>
          &times;
        </button>
        <div class='overlay-content'>
          {/* <form>
            <input
              type='search'
              placeholder='Search KindaCode.com...'
              className='search-input'
            />
            <button
              className='search-button'
              onClick={() => {
                console.log('Hi there');
                /* Your search logic here */
            // }}
            //   >
            //     Go
            //   </button>
            //   <p className='search-text'>
            //     Enter your keyword into the search box
            //   </p>
            // </form> 
          }
          <p className='search-text'>
            Created by Kellyn Dassler <a className='link' href="https://sfpc.study/sessions/fall-22/scrapism">(Scrapism Fall '22 -- SFPC)</a>
          </p>
          <p className='search-text'>
            This generative poem was inspired by the question posed by Hirschmann in her proposal of a feminist theory of freedom: "How can women reject patriarchal discourse if we have participated in its construction and it makes us who we are? … How can we ever figure out who “we” are or what “we want” if the language and concepts we must use are antagonistic to the enterprise we seek to carry out, that is, are themselves barriers to women’s freedom? <a className='link' href="https://www.jstor.org/stable/192090">(99)</a>
          </p>
          <p className='search-text'>
            My aim was to create a dynamically generative poem using pieces of text from feminists who stood to power in an embodied way via image, essay, manifesto, thought, or art to attempt to create "new discourse" outside of the technocratic, colonial, patriarchal center focused on efficiency, power, and oppression found in big tech and digital space. I also wanted to show the oppression of individuals and the erasure of self that social media profits from, and turn this erasure back on the social media companies themselves, while building a new discourse from the ashes of their words. (This is also a nod to show that we can never truly escape the social context of power and oppression, but perhaps only destroy and repurpose it). Phrases from these pieces are randomly selected to erase and replace intentionally selected words from Facebook's first PR announcement to reveal these power structures.Pulling from Joan Didion's "...the center does not hold..." essay about social strife in San Francisco, I initially disrupt the center of the PR announcement using these phrases, to accentuate the idea that power in big tech (symbolized by SF) cannot not hold when individuals and communities stand to power, and the disembodiment they create cannot be sustained. Each time, the poem is randomly generated and a bit different, and after each iteration, it is printed again to show the erasure over time. I also used a verbose coding style to reinforce a push against efficiency and technocratic environment, and combat the idea that code and logic are 'objective'.
          </p>
          <p className='search-text'>
            Sources:
          </p>
        </div>
      </div>
    </div>
  )
}
export default Home;
