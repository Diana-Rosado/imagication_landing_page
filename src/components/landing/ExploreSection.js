import CardImage from '@material-tailwind/react/CardImage';
import H4 from '@material-tailwind/react/Heading4';
import H6 from '@material-tailwind/react/Heading6';
import LeadText from '@material-tailwind/react/LeadText';
import Teamwork from 'assets/img/teamwork.jpeg';
import Explore from 'assets/img/explore.jpg';
import Image from '@material-tailwind/react/Image'


export default function ExploreSection() {
    return (
        <div className="relative flex content-center items-center justify-center h-screen">
        <section className="pb-20 bg-white-100 -mt-8">
            <div className="container max-w-7xl mx-auto px-2">
                <div className="flex flex-wrap items-center mt-16">
                    <div className="w-full md:w-5/12 px-4 mx-auto">
                        <H4 color="gray">Explore without limitations.</H4>
                        <LeadText color="blueGray">
                        Explore the endless possibilities in the comfort of your own home.  
                        </LeadText>
                    </div>                    
                    <div className="w-full md:w-4/12 px-4 mx-auto flex justify-center mt-24 lg:mt-0">
                        <Image
                            alt="Explore Image" 
                            raised={false}
                            src={Explore} 
                        />
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
}