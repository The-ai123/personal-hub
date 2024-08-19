




function AboutThisWebsitePage(){

    return(
        <>
            <div class="defaultBackground"></div>
            <center><h1>About This Website</h1></center>
            <h2>Technology Used</h2>
            <p>The frontend of the website is primarily made using react. React is a library that provides tools to make certain aspects 
                of website development easier which allows me to make a better website, faster. The website is also containerized in docker
                so I can move the website around and upgrade as I please. This also means I can develope and test the website on my personal
                computer before 'pushing to production'. This is a much needed upgrade because with this the website would often be
                unusable when I was working on it. I have nginx set up for reverse proxy so I can route requests to
                other servers in the future and host multiple apps using the same port cloudflare uses. The domain name is done through cloudflare
                so I am beholden to their system. The website hardware is a slight upgrade
                over my previous website. That website no longer exists because the hard drive stopped working. The computer was 12 years old and 
                I personally believe a sudden power outage was the last straw. So for this website I upgraded the hard drive from 320GB to 5TB, 
                meaning I should have plenty storage for any projects or plans I have or will have. Additionally It is running off a PSU and 
                because the hardware is so lightweight it can last 10 hours if the power goes out, which should be long enough to either shut 
                down correctly or for power to return.
            </p>
        </>
    );



}

export default AboutThisWebsitePage