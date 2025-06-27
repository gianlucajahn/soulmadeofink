"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Gallery.module.scss";
import { Clock, Feather, MessageCircleMore } from "lucide-react";
import Link from "next/link";

const poems = [
  {
    id: 1,
    title: "Cognizance",
    content:
      "Merely a faint glimpse into your soul is what I've gotten so far, yet was it enough to make me feel like a fresh summer breeze blew through a home I didn't know I had. \n For you to appear in my dreams when I barely knew your face. \n For me to know it's you even if I hadnt seen your face at all. \n For me to realize, at long last, I've always missed this sense of home. \n I missed you without even knowing you.",
    words: 80,
    categories: ["Melancholy", "Romance"],
    dateWritten: "2024-08-04T00:00:00Z",
    author: ""
  },
  {
    id: 2,
    title: "An untouched death",
    content:
      "I want to write. I want to live.\n A life, together with you and dedicated to you. \n I despise death but when the time comes, burn me, for the heat will reduce all my fears to nothing. My body, my life and my purpose will be lamented. In my ashes, all that will remain of me are the memories of you. \n So go, and scatter what's left of me in fields of crops. Let the wind carry me in my ghostly form. Each atom a memory of you repurposed into growing something as beautiful as you. \n Strangers will feel the lure of your delicate heart in the flowering pastures as once did I when I saw you. \n Over time, a tree will grow, strong and fierce. Cut it down, so that they can feel the warmth you once provided to me.",
    words: 124,
    categories: ["Death", "Romance"],
    dateWritten: "2024-22-10T00:00:00Z",
    author: ""
  },
  {
    id: 3,
    title: "Seperation",
    content:
      "I wanted to write about you but got dragged into wanting to write about myself upon thinking of you for long. However, when I started to write about myself, I had to think about you again. \n And just in that moment, it appeared to me that my perception of myself or of you — they don't work without each other anymore. \n I am no precisely measurable and separable thing when existing next to you. In my mind, as it seems to be, you and me are no separable and self-contained systems, but rather two parts of the same entity. \n Like two branches of roots from the same tree that got cut in two by erosion. And as it rained — or metaphorically — as we met again, we grew back together into supporting the weight of the tree we're helping sprout. \n Two branches of roots that grow in love, resilience, and longing every time we separate and grow together again.",
    words: 164,
    categories: ["Romance", "Fragility"],
    dateWritten: "2022-08-30T00:00:00Z",
    author: ""
  },
  {
    id: 4,
    title: "Outlasting our future",
    content:
      "I'm an ever-curious person — would you ask me if I wanted to know about the future, I'd say yes. \n But not about ours. \n Not about ours in the same way you wouldn't want to be spoiled about an upcoming movie. \n Because I want to preserve my curiosity. \n Because I want to dream. \n I want to dream about the daughter or the son we're raising. About those beautiful eyes you'll give them. About your loving mind and faithful heart you're handing on to them. \n About my love for you, outlasting us, because the world will find within our children all the reasons why I loved you all my life.",
    words: 110,
    categories: ["Parenthood", "Memory"],
    dateWritten: "2021-05-19T00:00:00Z",
    author: ""
  },
  {
    id: 5,
    title: "Letters to her",
    content:
      "It was you who made me be excited to wake up in the morning and check my phone instead of trotting to work. And it was you who made me wake up early in the first place so I could spend more time with you. \n It was you who, even on days where I could barely see or where my heart felt like it was pounding out of my chest, made me glad to experience them because it meant more time with you. \n It was you who made me hope for the truthiness in reincarnation because I feared one lifetime with you was not enough for me. \n It was you who made me go from a cold rock back to a little boy writing love letters. \n It was you who made me excited for my vacation to pass so I could get closer to seeing you again. It was you who made my head foggy and left me incapable of holding up a conversation every time I looked at your beautiful face. \n It was you who made me believe in soulmates because I fell in love with yours deeper than light falls into black holes after traveling the universe for long enough. \n It was you who made me want to show our kids what true love looked like. \n You are my moon and my sun at once, for ever since I met you I have never sat in the dark. \n It is you who has my heart, and it is not as if you stole it. You took my heart back like a book that you lent someone for them to read. You took it back as if you already had it in a past life and only let me borrow it until you found me again. I dearly hope for you to take it many times over, in many more lifetimes that I get to share with you. \n Because I love you, and I always will. Even if you asked me to stop or even if I tried to forget you — which I never would and never could. \n If you woke up tomorrow and forgot all we had, I would tell you all about us, even if it took until midnight just for you to forget it all again and for me to start from scratch the next day. I would never succeed, but even more so, I would never give up. Not on us — even if everything that was left from it was a memory in my head and a faint smile on your face at the end of the day when you start to remember what we had. \n I will never give up on you. Not today, not tomorrow, not in any fight we will ever have, and not in a decade. \n I love you. And I hope one day to be worthy of your love.",
    words: 523,
    categories: ["Romance", "Humility"],
    dateWritten: "2023-01-27T00:00:00Z",
    author: ""
  },
];

const reposts = [
  {
    id: 1,
    title: "Netochka Nezvanova",
    content:
      "You sensed that you should be following a different path, a more ambitious one, you felt that you were destined for other things but you had no idea how to achieve them and in your misery you began to hate everything around you.",
    words: 44,
    categories: ["Misanthropy"],
    dateWritten: "2024-08-04T00:00:00Z",
    author: "Fyodor Dostoyevsky",
  },
  {
    id: 2,
    title: "The Brothers Karamazov",
    content:
      "Man, do not pride yourself on your superiority to the animals, for they are without sin, while you, with all your greatness, you defile the earth wherever you appear and leave an ignoble trail behind you -- and that is true, alas, for almost every one of us!",
    words: 50,
    categories: ["Nature", "Humility"],
    dateWritten: "2024-22-10T00:00:00Z",
    author: "Fyodor Dostoyevsky",
  },
  {
    id: 3,
    title: "Letters to Felice",
    content:
      "I wish you were not on this earth, but entirely within me, or rather that I were not on this earth, but entirely within you; I feel there is one too many of us; the separation into two people is unbearable.",
    words: 49,
    categories: ["Romance"],
    dateWritten: "2024-22-10T00:00:00Z",
    author: "Franz Kafka",
  },
  {
    id: 4,
    title: "I wish you saw yourself",
    content:
      "I often see how you sob over what you destroy, how you want to stop and just worship; and you do stop, and then a moment later you are at it again with a knife, like a surgeon.",
    words: 44,
    categories: ["Destruction", "Worship"],
    dateWritten: "2024-22-10T00:00:00Z",
    author: "Anaïs Nin",
  },
  {
    id: 5,
    title: "You're somebody else",
    content:
      "I saw the part of you that only when you're older you will see, too.",
    words: 18,
    categories: ["Lyrics", "Heartbreak"],
    dateWritten: "2024-22-10T00:00:00Z",
    author: "Flora Cash",
  },
  {
    id: 6,
    title: "Bukowski's Philosophy",
    content: "Find what you love and let it kill you.",
    words: 9,
    categories: ["Philosophy", "Romance"],
    dateWritten: "2024-22-10T00:00:00Z",
    author: "Charles Bukowski",
  },
  {
    id: 7,
    title: "A Simple Love Poem",
    content:
      "It was only September.\n I don't know how many seasons I will be allowed to love you yet.",
    words: 22,
    categories: ["Romance"],
    dateWritten: "2024-22-10T00:00:00Z",
    author: "Megan Falley",
  },
  {
    id: 8,
    title: "Sober II (Melodrama)",
    content:
      "To be lucid, to feel the knife and still not let go,\n Is that weird?",
    words: 19,
    categories: ["Regret (?)"],
    dateWritten: "2024-22-10T00:00:00Z",
    author: "Logan February",
  },
  {
    id: 9,
    title: "The Good Place (2016)",
    content:
      "For the longest time, I saw myself as a bad person.\n You don't know how much it meant to me when you looked at me and could see the good.",
    words: 36,
    categories: ["Self Perception", "Romance"],
    dateWritten: "2024-22-10T00:00:00Z",
    author: "Michael Schur",
  },
  {
    id: 10,
    title: "Notes from Underground",
    content:
      "I swear, gentlemen, that to be too conscious is an illness - a real, thorough illness.\n I know that for certain, for I have experienced it myself.",
    words: 33,
    categories: ["Self Perception"],
    dateWritten: "2024-22-10T00:00:00Z",
    author: "Fyodor Dostoyevsky",
  },
  {
    id: 11,
    title: "The Ravishing of Lol Stein",
    content: "To make her happy, I would invent God if I had to.",
    words: 14,
    categories: ["Romance"],
    dateWritten: "2024-22-10T00:00:00Z",
    author: "Marguerite Duras",
  },
  {
    id: 12,
    title: "The Journals of Sylvia Plath",
    content:
      "So, now I shall talk every night. To myself. To the moon. \n I shall walk, as I did tonight, jealous of my loneliness, in the blue-silver of the cold moon, shining brilliantly on the drifts of fresh-fallen snow, with the myriad sparkles. \n I talk to myself and look at the dark trees, blessedly neutral. So much easier than facing people, than having to look happy, invulnerable, clever. \n With masks down, I walk, talking to the moon, to the neutral impersonal force that does not hear, but merely accepts my being. And does not smite me down.",
    words: 90,
    categories: ["Society"],
    dateWritten: "2024-22-10T00:00:00Z",
    author: "Sylvia Plath",
  },
  {
    id: 13,
    title: "My soulmate",
    content:
      "In my dreams I am kissing your mouth and you’re whispering ‘where have you been?’ I say, ‘I’ve been lost but I’m here now. You’re the only person who has ever been able to find me.",
    words: 44,
    categories: ["Romance", "Soulmate"],
    dateWritten: "2024-22-10T00:00:00Z",
    author: "Brad Martin",
  },
  {
    id: 14,
    title: "The Promise",
    content:
      "You’re important to me. I think if there’s anything that will last forever, it’s that. Whether we separate, stay in touch or rarely speak again, you will always be that little someone I really do care for, that I would sacrifice everything for to protect and keep safe.",
    words: 52,
    categories: ["Romance", "Promises"],
    dateWritten: "2024-22-10T00:00:00Z",
    author: "Beau Taplin",
  },
];

const experiences = [
  {
    id: 1,
    title: "A view on religions",
    content:
      "Do we really need religions? Homosexuality doesn’t concern me personally. I have no issue with homosexual people and I have reasons for that. First, my instincts: Seeing homosexual couples in series/films kissing, having sex, or engaging in any kind of bodily fluid exchange gives me less joy than watching the same actions between heterosexual couples. This stems from the fact that I myself have been in such situations and, due to my heterosexuality, instinctively prefer that idea. However, nobody is forcing me to watch homosexuals kiss or have sex—and even if they did, it wouldn’t kill me or harm me in any way. These people should do what makes them happy, as they’re not hurting anyone. So it’s absolutely fine with me if it brings them joy.\n Now for the logical approach: If a behavior is completely natural—i.e., innate to the being—and doesn’t harm other living beings, itself, or the environment, then it is by no means a problem and should be deemed acceptable.\n That hopefully sounds logical to everyone. If not: read it again. Still not? Close the tab. Now, we just have to determine whether homosexuality is innate to humans or a result of modern societal development. To simplify this question, let’s just look at animals. Animals have had no opportunity in the past decades to build a society as massive as ours, let alone interact with technological or biological advancements that could somehow explain a homosexual development.\n Well, as not everyone may know, according to the organization “Against Nature?” around 1,500 animal species exhibit homosexual behavior. Homosexuality has been observed—at least to a small degree—in a wide range of species. Some examples: 94 out of 100 pairings among giraffes are between same-sex partners. Three-quarters of all dolphins have same-sex partners. 19% of male mallards live homosexually. More than 80% of sea lions show homosexual tendencies. A third to half of orcas engage in homosexual behavior. So, it can clearly be stated that homosexuality is not a product of societal development but a natural, innate drive in a minority of individuals. Thus, it is proven: Homosexuality is entirely harmless and has no negative impact on the person or their surroundings (at most, birthrates might drop—if everyone suddenly became gay).\n I quote the islam:\n 'The practice of same-sex sexual relations by men and women is considered 'illegitimate sexual intercourse' (Zina, fornication) under a conservative interpretation of Islamic law.'.\n As for Christianity:\n 'God intended sexuality only for marriage between man and woman' (Genesis 1:27, 28; Leviticus 18:22; Proverbs 5:18, 19).\n And Judaism:\n 'If a man lies with a man as with a woman—both have committed an abomination; they shall surely be put to death, their blood is upon them!” (Lev. 20:13)'\n Christian believers often try to excuse this by claiming they only reject the homosexual behavior, not the individual. They support this with 'Honor all people' (1 Peter 2:17) and want to suggest that they still treat homosexuals with respect. But the legal clause in Leviticus 20:13 still prescribes the death penalty for anal intercourse between men. Contradictory? Oh yes. Frankly, I don’t care whether Christianity condemns just the sexual orientation and not the person—it doesn’t make it any better. As I’ve just proven, there is no logical reason to reject this orientation. It is simply—excuse the blunt term—stupid to do so.\n In the past, women were more responsible for managing the household than for earning wages. Today, our society is striving to create a career-based balance between men and women. One might argue about which parent is better suited for raising children, as I am not well-versed in pedagogy. But one cannot argue about whether one gender is superior to the other. There are about as many women with above-average IQs as men, which nullifies the question of value.\n The Roman Catholic philosopher Thomas Aquinas—incidentally one of the most influential philosophers in history—believed that women were failed men who had not fully attained the human form. He did, however, acknowledge that women were necessary for reproduction. How comforting. Christian friends would now message me, saying that’s just 'the opinion of some odd 16th-century philosopher' and that this indirect quote doesn’t prove anything. So, let’s be thorough:\n In the epistle to the Ephesians, attributed to Paul (Eph 5), it says:\n Wives, submit yourselves to your husbands as you do to the Lord. For the husband is the head of the wife as Christ is the head of the church, his body, of which he is the Savior. Now as the church submits to Christ, so also wives should submit to their husbands in everything.\n According to Martin Luther, the major reformer who set in motion the Reformation and the denominational splits between the 16th and 17th centuries:\n Death in childbirth is nothing more than dying in noble work and obedience to God. If women wear themselves out and ultimately die from it, it doesn’t matter. Let them die, that’s what they’re there for.\n An illogical and utterly baseless thesis. In 'Surah 4' of the Quran, it says that men are above women. At least, according to Islamic scholars, the Quran does not claim that women were created from men. Quote:\n God first created the genderless being human. From that, God simultaneously and equally formed man and woman, says Hafner-Al Jabaji. The woman was not created from man in the Islamic understanding.\n In Judaism, the role of the woman was also subordinate to the man. Girls received little to no education, and participation in synagogue events was forbidden to them. Only later were women’s sections introduced in synagogues, which were considered less sacred and were separated by grilles from the men's area.\n I’m honestly glad that religion makes it so easy for me when it comes to gender roles. I don’t have to explain for long why it’s pointless to argue about the value of the genders, because from a logical point of view there’s only one correct answer. Finally, I’d like to say something about the famous stories we were told as children through religious books.\n I don’t need to say much about that either: Stories like the existence of Jesus, Jesus’ resurrection, or Moses parting the sea have been passed down from generation to generation, and I find it absolutely ridiculous that these stories are the first things taught to children. I can’t describe it any other way than “ridiculous.” We are talking about unproven stories being told to children to give the appearance of seriousness or realism to one’s religion. If these stories were proven, there would be only one religion—and that’s not the case. Children are taught to believe in something that is actually purely theoretical and that shouldn’t be given attention unless evidence is being actively sought. No wonder kids believe everything adults say, when they’re handed something as foundational as religion with no proof and are still expected to be interested in or even follow it.\n A comparison from science to clarify my opinion: The Higgs boson particle, a fundamental particle in physics, was first theorized around 1960. Back then, it was claimed to exist. The first step was to discuss whether its existence was even physically/mathematically/chemically possible. Once that was settled, individual physicists began trying to prove the particle's existence. In 2012, a particle accelerator was used to detect a particle that could have been the Higgs boson. After lengthy analysis, its existence was confirmed, and François Englert and Peter Higgs received the 2013 Nobel Prize in Physics. That’s how arguments and the support of a position should work.\n In conclusion, based on my research, I’ve come to the conclusion that all three religions I examined show contempt—unsupported by arguments or reasons—for various societal structures and groups of people. This contempt is—as I’ve proven at the beginning of both the ‘Homosexuality’ and ‘Gender Roles’ sections—wrong and irrational. It punishes people who haven’t harmed themselves, others, or the environment. If I belonged to one of these religions, I would now know that some doctrines (not all, but some) of this religion are irrational. I would therefore conclude that I must question every doctrine my religion teaches me based on its logic and rationality, as there is a chance that the teaching is irrational. So instead of having to ask whether every argument and claim of my religion is “logical,” I can simply set all religious teachings aside and think rationally.\n That saves me both time and energy.",
    words: 1955,
    categories: ["Religion", "Philosophy"],
    dateWritten: "2023-10-01T00:00:00Z",
    author: ""
  },
  {
    id: 2,
    title: "Schools and public opinion",
    content:
      "Today, I want to look at the topic of schools. First, let me explain the most obvious fundamental idea behind the concept of 12 years of schooling:\n Primary school: A student begins their education. First, they learn how to speak—both in German and in English, which is controversial for some. I personally didn’t start English lessons until 4th grade, so I can’t give a well-founded opinion on the new system. Alongside language learning, students are introduced to the basics of the world around them in the form of general science. They receive math instruction and learn how to calculate using small numbers, for simplicity’s sake. This continues throughout the first four years of schooling. After that, the student has completed primary school.\n Secondary school: The student is now introduced to physics, and later also to chemistry, biology, and a second foreign language. Since chemistry is fundamentally based on physics (very basically—don’t tilt, please!), you only start chemistry lessons in 7th grade, and physics from the 6th grade. Makes sense? Yes.\n The further progression of school education is often criticized by many students. I find it absolutely understandable. Yes, I was annoyed at times that I had to take music and art classes, but I’m not going to complain about it now, because I can fully understand the logic behind it. A person at the age of 10 can never be 100% sure what they want to do in life. They haven’t had physics classes, chemistry classes, history lessons, or even been in a biology lecture hall, nor have they taken art or music courses. Maybe they think they want to “work in math” later but then realize that they’re more drawn to physics or chemistry. But they can’t make that decision if they’ve never been exposed to those subjects!\n In school, students are given the opportunity to get a broad introduction to all common subject areas and then decide which one they like best. You might not want art class but would love to have twice as much physical education. Your classmate, on the other hand, might want to spend the whole day talking about Claude Monet. Another student devours every bit of information about the life of Johann Sebastian Bach. Everyone has their own interests, and everyone is given the opportunity to discover them. The school system could remove history, art, and music classes—but doing so would create socially stunted robots who are unable to participate in political discussions, for example.\n History class, for instance, is a fundamental building block that is needed to understand the political interests and actions of various countries. If you can’t at least historically understand American patriotism, then clearly you weren’t paying attention in school. That’s just one of many examples of why education is important for general knowledge and for helping our future fellow citizens find their interests.\n Twist it and turn it however you want, but you should be glad that you have access to such a wide range of education at such a low cost.",
    words: 862,
    categories: ["Society", "Behavioral Science"],
    dateWritten: "2023-10-01T00:00:00Z",
    author: ""
  },
];

export default function Gallery(props: { category: string }) {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const items = () => {
    if (props.category === "poetry") {
      return poems;
    } else if (props.category === "reposts") {
      return reposts;
    } else {
      return experiences;
    }
  };

  return (
    <>
      <div className={styles.grid}>
        {items().map((item) => {
          // Hide selected card in grid to prevent layout conflict
          if (item.id === selectedId)
            return <div key={item.id} style={{ visibility: "hidden" }} />;
          return (
            <motion.div
              layoutId={`card-${item.id}`}
              className={`${styles.card} ${styles.gridCard}`}
              key={item.id}
              onClick={() => setSelectedId(item.id)}
            >
              <div className={styles.cardHeader}>
                {" "}
                <div className={styles.headerTop}>
                  {" "}
                  <h4>{item.title}</h4>
                  <div className={styles.time}>
                    <Clock size={16} />
                    {item.words} Wörter
                  </div>
                </div>
                <div className={styles.categories}>
                  {item.categories.map((category, index) => (
                    <span key={index} className={styles.category}>
                      {category}
                    </span>
                  ))}
                </div>
              </div>
              <div className={styles.cardContent} style={{ color: "#171717" }}>
                {item.content.split("\n").map((line, index) => (
                  <div
                    key={index}
                    style={{ marginBottom: "0.5em", marginTop: "0.7em" }}
                  >
                    {line}
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      <AnimatePresence>
        {selectedId && (
          <>
            <motion.div
              className={styles.overlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
            />
            <div className={styles.modalWrapper}>
              <motion.div
                layoutId={`card-${selectedId}`}
                className={`${styles.modal} ${styles.card}`}
                onClick={() => setSelectedId(null)}
              >
                <div className={styles.cardHeader}>
                  {" "}
                  <div className={styles.headerTop}>
                    {" "}
                    <h4>{items().find((i) => i.id === selectedId)?.title}</h4>
                    <div className={styles.time}>
                      <Clock size={16} />
                      {items().find((i) => i.id === selectedId)?.words} Wörter
                    </div>
                  </div>
                  <div className={styles.categories}>
                    {items()
                      .find((i) => i.id === selectedId)
                      ?.categories.map((category, index) => (
                        <span key={index} className={styles.category}>
                          {category}
                        </span>
                      ))}
                  </div>
                </div>
                <div className={styles.cardContent}>
                  {items()
                    .find((i) => i.id === selectedId)
                    ?.content.split("\n")
                    .map((line, index) => (
                      <div
                        key={index}
                        style={{ marginBottom: "0.5em", marginTop: "0.7em" }}
                      >
                        {line}
                      </div>
                    ))}
                </div>
                <Link href="https://discord.com/users/556559991062921217">
                  <div className={styles.feedbackFooter}>
                    {props.category !== "reposts" ? (
                      <>
                        <MessageCircleMore color="white" />
                        <p className={styles.lowerEndText}>Du möchtest Feedback geben?</p>
                      </>
                    ) : (
                      <>
                        <Feather color="white" />
                        <p className={styles.lowerEndText}>Author: {items().find((i) => i.id === selectedId)?.author}</p>
                      </>
                    )}
                  </div>
                </Link>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
