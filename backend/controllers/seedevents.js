import dotenv from "dotenv";
dotenv.config();
import connectDB from "../config/db.js";
import { Event } from "../models/EventModel.js";

await connectDB();

const events = [

  // ================= DANCE =================
  {
    event_name: "Street Reloaded",
    event_category: "DANCE",
    venue: "Open Air Theatre (Near Central Library)",
    description: "Solo face-off street dance battle featuring hip-hop, krumping, popping and breaking.",
    rulebook: "https://docs.google.com/document/d/1EhUgI-4xN3_qZvlvMEoGr6gLhLGJ6d4_--ZUZFV1mV4/edit",
    bg_image_url: "https://drive.google.com/file/d/1DNk29uZ8PK8YnGNSudq3mRRddQz6JFYe/view?usp=sharing"
  },
  {
    event_name: "Street Beats",
    event_category: "DANCE",
    venue: "Open Air Theatre (Near Central Library)",
    description: "High-energy crew dance battle with street styles and teamwork.",
    rulebook: "https://docs.google.com/document/d/1VuJ1zuE7nbI-CBOXE3Xu9V19yfZdttGoHYhjSowwvsc/edit",
    bg_image_url:"https://drive.google.com/file/d/1DNk29uZ8PK8YnGNSudq3mRRddQz6JFYe/view?usp=sharing"
  },
  {
    event_name: "Footloose",
    event_category: "DANCE",
    venue: "Penman",
    description: "Solo dance showdown highlighting power, passion, and expression.",
    rulebook: "https://docs.google.com/document/d/1d__cJ4TEBhWG6PO3gaOEgje6Ue22r_c2haHW5LewcHQ/edit",
    bg_image_url:"https://drive.google.com/file/d/1DNk29uZ8PK8YnGNSudq3mRRddQz6JFYe/view?usp=sharing"
  },
  {
    event_name: "Reflection",
    event_category: "DANCE",
    venue: "Penman",
    description: "Duo dance competition celebrating coordination and chemistry.",
    rulebook: "https://docs.google.com/document/d/1m89BAOSQUYB4W0KalyS3eZjOjRn9Jq0WfNkNyH7oWwY/edit",
        bg_image_url:"https://drive.google.com/file/d/1DNk29uZ8PK8YnGNSudq3mRRddQz6JFYe/view?usp=sharing"

  },
  {
    event_name: "Hustle Herd",
    event_category: "DANCE",
    venue: "Penman",
    description: "High-energy group dance performance focused on unity and rhythm.",
    rulebook: "https://docs.google.com/document/d/10kEWZFACzTvxZefW4pXPTv7kzQiru-ES0hPD2IMafrE/edit",
    bg_image_url:"https://drive.google.com/file/d/15txx6LhkW3rjpM1WHfZPGfpqBYd8Yp_J/view?usp=sharing"
  },

  // ================= MUSIC =================
  {
    event_name: "Harmony",
    event_category: "MUSIC",
    venue: "Open Air Theatre",
    description: "Battle of bands competition across genres with a grand prize.",
    rulebook: "https://docs.google.com/document/d/1LKUiiMEPMTqUxhwxsjMCd-wqWZsjzaLqMhOVIqF8xVw/edit",
    bg_image_url:"https://drive.google.com/file/d/1CzhI9YyP789eVWK_XbuFlFpK5kVuPE0a/view?usp=sharing"
  },
  {
    event_name: "Aaroh",
    event_category: "MUSIC",
    venue: "Penman",
    description: "Solo singing competition across classical and western genres.",
    rulebook: "https://docs.google.com/document/d/1FW1Y6P14BvA4NacuD2uXWwMr2fNax-UtbtpD88fAlWs/edit",
    bg_image_url:"https://drive.google.com/file/d/1CzhI9YyP789eVWK_XbuFlFpK5kVuPE0a/view?usp=sharing"
  },

  // ================= FASHION =================
  {
    event_name: "Paridhaan",
    event_category: "FASHION",
    venue: "Gymkhana Ground",
    description: "Team fashion ramp walk inspired by a central theme.",
    rulebook: "https://docs.google.com/document/d/1aOFlJIQMwEl91lw6ZMhVL1Ztcc_aFGZhqSWL7Ezgffw/edit",
    // bg_image_url:""
  },
  {
    event_name: "Mr. & Mrs. Srijan",
    event_category: "FASHION",
    venue: "Gymkhana Ground",
    description: "Personality contest with talent rounds, Q&A, and fashion walk.",
    rulebook: "https://docs.google.com/document/d/1_NIoZolEBGZbcEKpZMiv8KXuNj_ZgE2OUOrQKE21npg/edit",
    // bg_image_url:""
  },

  // ================= FILM =================
  {
    event_name: "Scriptwriting Competition",
    event_category: "FILM",
    venue: "Online",
    description: "Scriptwriting contest focused on cinematic storytelling.",
    rulebook: "https://docs.google.com/document/d/1D98NksNeZEdVl0G66EhUAZw6BrLb9mMxsF3CXWgpwYo/edit",
    // bg_image_url:""
  },
  {
    event_name: "Frames of Srijan",
    event_category: "FILM",
    venue: "Online",
    description: "60-second reel competition capturing the spirit of Srijan.",
    rulebook: "https://docs.google.com/document/d/1atAr9OnhJNkBMwl_VHu2jERp9bCpyEcB0Xpbo5zwXow/edit",
    // bg_image_url:""
  },
  {
    event_name: "Online Short Film Making",
    event_category: "FILM",
    venue: "Online",
    description: "Short film making competition showcasing storytelling and direction.",
    rulebook: "https://docs.google.com/document/d/1MCG-hgip6W8nlgfjK_q9AyYF6GjaPcFCtaDYQdafVJk/edit",
    bg_image_url:"https://drive.google.com/file/d/1WsniE1znuQXiBS8TSYg1HPzeOyDGb5IA/view?usp=sharing"
  },

  // ================= THEATRE =================
  {
    event_name: "Ek Abhinay",
    event_category: "THEATRE",
    venue: "GJLT Auditorium",
    description: "Solo acting competition celebrating expression and creativity.",
    rulebook: "https://docs.google.com/document/d/1MQXMk3mmvWo8n9i0djxI5SCV1C0wpDnMhtLvir1MilM/edit",
    // bg_image_url:""
  },
  {
    event_name: "Hoonkaar",
    event_category: "THEATRE",
    venue: "Near Central Library",
    description: "Flagship theatrical event with electrifying performances.",
    rulebook: "https://docs.google.com/document/d/1vFLg1lqwNADUdn2krU5m8mCYtsHkxaPf0XLkitS3pz0/edit"
  },

  // ================= ART =================
  {
    event_name: "Clay Modelling",
    event_category: "ART",
    venue: "Open Air Theatre",
    description: "Team clay modelling event testing creativity and teamwork."
  },
  {
    event_name: "DIY Mosaic",
    event_category: "ART",
    venue: "New Lecture Hall Complex",
    description: "Collaborative mosaic painting activity with free caricatures."
  },
  {
    event_name: "Face Painting",
    event_category: "ART",
    venue: "Open Air Theatre",
    description: "Team face painting challenge with cosmetic-grade materials."
  },
  {
    event_name: "Graphic Grapple",
    event_category: "ART",
    venue: "New Lecture Hall Complex",
    description: "Poster design competition with strict originality rules.",
    rulebook: "https://docs.google.com/document/d/1avdGrSBqr7C1FsHf1ageFmAOy6ZekKoX5eT3jRAZy1s/edit",
    bg_image_url:"https://drive.google.com/file/d/1Jk7Miw8CayFnSUQJXUQrjWrFg5kn4LfZ/view?usp=sharing"
  },

  // ================= PHOTOGRAPHY =================
  {
    event_name: "Fotorush",
    event_category: "PHOTOGRAPHY",
    venue: "Near Central Library",
    description: "Timed photography race involving clues and challenges.",
    rulebook: "https://docs.google.com/document/d/1h_OR99jG5mAKBOGZK1rljV2bhW5iv2fqPCMl-TBSfoE/edit",
    // bg_image_url:""
  },
  {
    event_name: "Srijan Through My Lens",
    event_category: "PHOTOGRAPHY",
    venue: "Online",
    description: "Instagram story challenge capturing the vibe of Srijan."
  },

  // ================= COMEDY =================
  {
    event_name: "Saanp Tank",
    event_category: "COMEDY",
    venue: "GJLT Auditorium",
    description: "Comedy pitching event inspired by Shark Tank.",
    rulebook: "https://docs.google.com/document/d/1RiuPwoHajlSbzkZ47lny-s1NDfJFSHTQ8bGEXjkTS68/edit",
    bg_image_url: "https://drive.google.com/file/d/1cxTXRoUzU6E6qZDXlrFu_loMnspwj1Em/view?usp=sharing"
  },
  {
    event_name: "ISM's Got Latent",
    event_category: "COMEDY",
    venue: "New Lecture Hall Complex",
    description: "Talent showcase with humour and creativity.",
    rulebook: "https://docs.google.com/document/d/1ICTPnQ5Xby5_IhTQ2p191EbD1BdVzbuXpWVFcNqKxiU/edit",
        bg_image_url: "https://drive.google.com/file/d/1cxTXRoUzU6E6qZDXlrFu_loMnspwj1Em/view?usp=sharing"

  },

  // ================= LITERARY =================
  {
    event_name: "Chakravyuh",
    event_category: "LITERARY",
    venue: "New Lecture Hall Complex",
    description: "Campus treasure hunt using Hindi riddles.",
    rulebook: "https://docs.google.com/document/d/19Zu8Ro9LunKj_Q5mCICr7jrRWnUG-sLIxhiFev8veLc/edit"
  },
  {
    event_name: "Kavyadhara",
    event_category: "LITERARY",
    venue: "New Lecture Hall Complex",
    description: "Hindi idiom acting challenge.",
    rulebook: "https://docs.google.com/document/d/1VjtRws4b_1mUYWfATl0cqLJQCHMbr0MF_zLVoukdq3w/edit"
  },
  {
    event_name: "Plot Paradox",
    event_category: "LITERARY",
    venue: "New Lecture Hall Complex",
    description: "Creative genre-twisting writing competition.",
    rulebook: "https://docs.google.com/document/d/1mr8UmZ6Fi7nM4RC1qp4nypK1R4nnfgBcV25Z5Q06m94/edit",
    bg_image_url:"https://drive.google.com/file/d/1M04uCnpiX2FEoIkQsIm8qpRhQ2zy_mqU/view?usp=sharing"
  },
  {
    event_name: "Folktwist",
    event_category: "LITERARY",
    venue: "NAC Hall",
    description: "Creative storytelling competition with narrative twists.",
    rulebook: "https://docs.google.com/document/d/1Ir7jUA0wGdLyDK8zTxooAv13wuzA4EYa_N_TvHZAT40/edit",
    bg_image_url:"https://drive.google.com/file/d/1sJFIMiA-HxRKy5rYd1oNIs_6Y1Bd93ue/view?usp=sharing"
  },
  {
    event_name: "Trialthlon",
    event_category: "LITERARY",
    venue: "New Lecture Hall Complex",
    description: "Three-round literary competition testing creativity and debate.",
    rulebook: "https://docs.google.com/document/d/1yAxUk1zjYqqHuN7Kn2pjE4a7Extv0VWGxbZwYB7icYE/edit",
    bg_image_url:"https://drive.google.com/file/d/1sJFIMiA-HxRKy5rYd1oNIs_6Y1Bd93ue/view?usp=sharing"
  },

  // ================= MISC =================
  {
    event_name: "Triwizard Tournament",
    event_category: "MISC",
    venue: "New Lecture Hall Complex",
    description: "Multi-round intellectual puzzle and quiz tournament.",
    rulebook: "https://docs.google.com/document/d/1U0KdaQyEhm3j81BFAsKMLxoGz6rxIdLvukSn0C4F5FU/edit"
  },
  {
    event_name: "Speak Snitch Survive",
    event_category: "MISC",
    venue: "GJLT Auditorium",
    description: "Public speaking and impromptu challenge event.",
    rulebook: "https://docs.google.com/document/d/1UJam5DmP3_w92qkPvnu2YORS3DIXcyVZod1SISijTBQ/edit",
    bg_image_url:"https://drive.google.com/file/d/186eG2S1W9IMLerAbfDQP9m3ww6-IxJST/view?usp=sharing"
  },
  {
    event_name: "HELM Quiz",
    event_category: "MISC",
    venue: "New Lecture Hall Complex",
    description: "Team quiz event testing logic and general knowledge.",
    rulebook: "https://docs.google.com/document/d/1nxBdnltU1U-ivILhMCiJNPtshYS2fkUNSzvMv4xYmR0/edit"
  },
  {
    event_name: "General Quiz",
    event_category: "MISC",
    venue: "NAC Auditorium",
    description: "General trivia quiz across diverse domains.",
    rulebook: "https://docs.google.com/document/d/1tlXiRCBzpGyYIEwHmA_tgt3zipL_hEMfMozXN-RuYRk/edit"
  },
  {
    event_name: "Flavours of the Globe",
    event_category: "MISC",
    venue: "Near Central Library",
    description: "Culinary face-off celebrating global flavours.",
    rulebook: "https://docs.google.com/document/d/16JETWWOmPJFlLWUSJyyajVNYGOqTmhlFHIUhsdYNxM4/edit"
  }
];

const seedEvents = async () => {
  try {
    await Event.deleteMany(); 
    await Event.insertMany(events);
    console.log("ALL EVENTS SEEDED SUCCESSFULLY");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedEvents();