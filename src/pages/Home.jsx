import AboutOurApps from "../sections/about-our-apps";
import HeroSection from "../sections/hero-section";
import OurLatestCreation from "../sections/our-latest-creation";
import GetInTouch from "../sections/get-in-touch";
import OurTestimonials from "../sections/our-testimonials";
import SubscribeNewsletter from "../sections/subscribe-newsletter";
import TrustedCompanies from "../sections/trusted-companies";
export default function Home(){
    return(
        <>
        <HeroSection />
        <OurLatestCreation />
        <AboutOurApps />
        <OurTestimonials />
        <TrustedCompanies />
        <GetInTouch />
        <SubscribeNewsletter />
        </>
    )
}