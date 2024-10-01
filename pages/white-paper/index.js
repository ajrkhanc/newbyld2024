import Head from "next/head";
import Link from "next/link";
import Slider from "react-slick";

export default function Books() {
  return (
    <>
      <Head>
        <title>White Paper - BYLD Group</title>
        <meta name="description" content="White Paper" />
      </Head>

      <div className="rs-about style2 clientcornnerlogo ptt-20 pbb-30">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="">
                <div className="sec-title3 mbb-35">
                  <h4 className="countertoph2 text-center font30">
                    Explore Our White Paper
                  </h4>
                  <div className="heading-border-line center-style"></div>
                </div>
              </div>
            </div>

            <div className="col-sm-4 mb-10">
              <div className="innervideoshd ebookst text-center">
                <a href="/white-paper/empower-your-dealer-sales-teams-for-the-ev-revolution">
                  <img
                    src="/assets/img/white-paper/wp_AmarWhiteprImg.webp"
                    alt="books"
                  />
                  <h4 className="">
                    Empower Your Dealer Sales Teams For The Ev Revolution
                  </h4>
                  <h3 className="ebookbtn">Read White Paper</h3>
                </a>
              </div>
            </div>
            <div className="col-sm-4 mb-10">
              <div className="innervideoshd ebookst text-center">
                <a href="/white-paper/total-cost-of-ownership-(tco)-analysis">
                  <img
                    src="/assets/img/white-paper/v1_totalImg.webp"
                    alt="books"
                  />
                  <h4 className="">Total cost of Ownership (tco) Analysis</h4>
                  <h3 className="ebookbtn">Read White Paper</h3>
                </a>
              </div>
            </div>

            <div className="col-sm-4 mb-10">
              <div className="innervideoshd ebookst text-center">
                <a href="/white-paper/creating-agile-leadership-teams">
                  <img
                    src="/assets/img/white-paper/creating-agile-leadership-teams.webp"
                    alt="books"
                  />
                  <h4 className="">Creating agile leadership teams</h4>
                  <h3 className="ebookbtn">Read White Paper</h3>
                </a>
              </div>
            </div>

            <div className="col-sm-4 mb-10">
              <div className="innervideoshd ebookst text-center">
                <a href="/white-paper/what-it-means-to-be-an-ambidextrous-innovation-leader">
                  <img
                    src="/assets/img/white-paper/what-it-means-to-be-an-ambidextrous-innovation-leader.webp"
                    alt="books"
                  />
                  <h4 className="">
                    What it means to be an ambidextrous innovation leader
                  </h4>
                  <h3 className="ebookbtn">Read White Paper</h3>
                </a>
              </div>
            </div>

            <div className="col-sm-4 mb-10">
              <div className="innervideoshd ebookst text-center">
                <a href="/white-paper/alignment-through-purpose-driven-innovation">
                  <img
                    src="/assets/img/white-paper/alignment-through-purpose-driven-innovation.webp"
                    alt="books"
                  />
                  <h4 className="">
                    Alignment for responsible & purpose-driven innovation
                  </h4>
                  <h3 className="ebookbtn">Read White Paper</h3>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
