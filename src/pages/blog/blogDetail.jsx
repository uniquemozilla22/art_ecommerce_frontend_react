import React , {  useState  }  from 'react';
import classes from "./blogdetail.module.css";
import BlogGrid from "./bloggrid/blogGrid";




const BlogDetail = () => {

  return (
    <>
     <div className="container-fluid">
         <div className={classes.blogImage}>
             <img src="https://t4.ftcdn.net/jpg/04/45/14/67/360_F_445146770_BBDoeRCg2l0gz09D7D63NqgUYmh1bE34.jpg"  className='w-100'/>

         </div>
        

        <div className="row">
            <div className="col-lg-9">
                <div className={classes.blogDetail}>
                    <div>June 21, 2021</div>
                    <div>Yogesh Bhattrai</div>
                </div>
                <h2 className={classes.blogTitle}>Could JPG Become the Tumblr of the NFT Space?</h2>
                <div className={classes.blogContent}>
                    <p>Proponents of NFTs argue that the novel technology is a radical force that will democratize art and push out gatekeepers. The truth is that NFTs remain inaccessible to many. The team behind JPG, a new website that aspires to be the Tumblr of the crypto world, is hoping to change that.</p> 
                    <p>“With JPG you can build your own NFT gallery, no matter who you are or what resources you have,” said María Paula Fernandez, the cofounder of JPG, likening the enterprise to Are.na, a popular social media website that empowers users to collect and curate content.
                    JPG users can import and display any NFT that’s available on OpenSea, one of the largest NFT platforms, to curate a gallery of their own. The website, which was launched in July by Fernandez and cofounders Trent Elmore and Sam Spike, just received $3.8 million in a recent seed funding round.
                    Existing JPG galleries function as organized shows dealing with concepts like deep time, alchemy, and virality. JPG galleries have sometimes been displayed IRL. During Art Basel Miami Beach, Sofia Garcia and Kate Hannah, who work for the generative art NFT platform ArtBlocks, curated a show about on-chain generative art on JPG that was exhibited at the fair. Gabe Wise, who works for artist Sarah Meyohas and and the crypto-art-focused consultancy GAC, curated the show “Blockchain Aesthetics” on JPG. That exhibition was displayed during NFT.NYC, a conference held last year in New York, with the support of FingerprintsDAO, the Museum of Crypto Art, and the NFT platform Zora.</p>
                    <p>Wise, who said he left behind the traditional art world after stints as an intern at Gagosian and David Zwirner, was attracted to JPG because it could replace a culture of gatekeeping. “Right now, there’s no grand institutional legitimization in the NFT space through which the traditional fine art world can understand and evaluate the relevance of NFT works,” Wise said. “I think that we can actually view JPG as a force that facilitates discourse and bottom-up curation that takes the place outside an institution.”
                    It’s not as if the NFT space is without its problems. “I’m very aware of the barriers that an increasingly affluent group of people are creating,” Fernandez said. “It’s very hard to position yourself in this community if you don’t have money. You need to collect to flaunt your collection, buy these PFPs, and flip it tomorrow for twice the price, etc.”</p>
                    <p>Fernandez aims for JPG to be a palliative to this overly commercialized ecosystem. Because the website is free and because there is no transactional component, users can focus on viewing and curating NFTs. Just as apps and websites like Instagram and Tumblr facilitate discussion around images and texts, JPG could become a tool with which to do those same things with NFTs. Fernandez said that shifting the focus away from the buying and selling of NFTs will become essential in finding “long-term strategies to preserve the space.”</p>
                </div>
            </div>
            <div className="col-lg-3">
                <h2 className={classes.moreBlogTitle}>More Blogs</h2>
                <BlogGrid />

            </div>
        </div>
     </div>
    </>
  );
};

export default BlogDetail;
