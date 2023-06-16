import { useState } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import "../qna/qna.css";

function Qna() {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);

  return (
    <>
      <div className="container-qna">
        <div className="title-qna">
        <h1>Frequently Asked Questions</h1>
        </div>
        <a className="optionqna" onClick={() => setOpen(!open)}
          aria-controls="Qna-collapse-text"
          aria-expanded={open}> What Is ASEAN YOUTH FORUM ? +</a>
        <Collapse in={open}>
          <div id="example-collapse-text" className="text-qna">
            FAQs The ASEAN Youth Forum (AYF) is a platform for young people in
            the ASEAN (Association of Southeast Asian Nations) region to come
            together, exchange ideas, and engage in discussions on various
            issues affecting their communities and the region. The forum aims to
            promote youth participation in ASEAN's decision-making processes and
            to foster greater understanding and cooperation among young people
            in the region.
          </div>
        </Collapse>
      </div>
      <div className="container-qna">
        <a
          
          onClick={() => setOpen1(!open1)}
          aria-controls="Qna-collapse-text"
          aria-expanded={open1}
          className="optionqna"
        >
          Who can become a member of the ASEAN YOUTH FORUM ? +
        </a>
        <Collapse in={open1}>
          <div id="example-collapse-text" className="text-qna">
            To become a member of the ASEAN Youth Forum (AYF), you must be a
            citizen of one of the ten ASEAN member states, which are Brunei
            Darussalam, Cambodia, Indonesia, Laos, Malaysia, Myanmar, the
            Philippines, Singapore, Thailand, and Vietnam. You must also be
            between 18 and 30 years old, have a strong interest in ASEAN
            affairs, and demonstrate leadership potential, as well as a
            commitment to promoting regional cooperation, understanding, and
            integration. Membership in the AYF is typically open to students,
            young professionals, activists, and other individuals who are
            passionate about making a positive impact in their communities and
            in the region. The selection process for AYF membership is usually
            competitive and based on factors such as academic achievements, work
            experience, community involvement, and demonstrated leadership
            potential.
          </div>
        </Collapse>
      </div>
      <div className="container-qna">
        <a
          
          onClick={() => setOpen2(!open2)}
          aria-controls="Qna-collapse-text"
          aria-expanded={open2}
          className="optionqna"
        >
          What are the advantages if we become members of the ASEAN YOUTH FORUM
          ? +
        </a>
        <Collapse in={open2}>
          <div id="example-collapse-text" className="text-qna">
            Becoming a member of the ASEAN Youth Forum (AYF) can provide several
            advantages, including: Leadership Development: AYF members have the
            opportunity to develop their leadership skills and gain valuable
            experience in project management, teamwork, and communication
            through organizing and participating in various activities and
            events. Networking Opportunities: AYF members can build
            relationships with other young people from different ASEAN member
            states, as well as with ASEAN officials and other stakeholders. This
            can lead to new opportunities for collaboration, partnerships, and
            career development. Exposure to ASEAN Affairs: AYF members can gain
            a deeper understanding of ASEAN's policies, programs, and
            initiatives, as well as the challenges and opportunities facing the
            region. This can help them become more informed and engaged citizens
            and advocates for regional integration and cooperation. Access to
            Resources: AYF members can access a wide range of resources,
            including training programs, scholarships, and funding
            opportunities, to support their personal and professional
            development, as well as their projects and initiatives. Influence on
            ASEAN's Decision-Making: AYF members have the opportunity to voice
            their opinions and recommendations on various issues affecting youth
            and the region, and to contribute to ASEAN's decision-making
            processes through consultations, dialogues, and other channels. This
            can help ensure that the voices and perspectives of young people are
            heard and considered in the region's policies and programs.
            Regenerate response
          </div>
        </Collapse>
      </div>
      <div className="container-qna">
        <a
          
          onClick={() => setOpen3(!open3)}
          aria-controls="Qna-collapse-text"
          aria-expanded={open3}
          className="optionqna"
        >
          Can we get information on the ASEAN YOUTH FORUM ? +
        </a>
        <Collapse in={open3}>
          <div id="example-collapse-text" className="text-qna">
            Yes, there are several ways to get information on the ASEAN Youth
            Forum (AYF): ASEAN Secretariat Website: The ASEAN Secretariat
            website provides information on the AYF, including its objectives,
            activities, and how to apply for membership. The website also
            contains updates on upcoming AYF events and news related to youth
            and ASEAN affairs. Social Media: The AYF has a social media presence
            on platforms such as Facebook, Twitter, and Instagram, where it
            shares information on its activities, events, and news related to
            youth and ASEAN affairs. Following the AYF on social media is a
            great way to stay up-to-date on the latest developments and
            opportunities. Local Youth Organizations: Local youth organizations
            in ASEAN member states may also have information on the AYF and can
            provide guidance on how to apply for membership or participate in
            AYF events. ASEAN Member States' Embassies: ASEAN member states'
            embassies or missions in your country may also provide information
            on the AYF and can help connect you with relevant resources or
            contacts. AYF Alumni Network: The AYF Alumni Network is a community
            of past AYF members who continue to be engaged in ASEAN affairs and
            youth development. Connecting with AYF alumni can provide insights
            and advice on how to get involved with the AYF and make the most of
            your membership.
          </div>
        </Collapse>
      </div>
      <div className="container-qna">
        <a
          
          onClick={() => setOpen4(!open4)}
          aria-controls="Qna-collapse-text"
          aria-expanded={open4}
          className="optionqna"
        >
          Is the information in the ASEAN YOUTH FORUM original news ? +
        </a>
        <Collapse in={open4}>
          <div id="example-collapse-text" className="text-qna">
            The ASEAN Youth Forum (AYF) is an official platform established by
            the ASEAN Secretariat to promote youth participation in ASEAN
            affairs and to foster greater understanding and cooperation among
            young people in the region. The information provided by the ASEAN
            Secretariat and the AYF is generally considered to be credible and
            reliable, as it is based on official sources and verified by
            relevant stakeholders. However, like any other news or information
            source, it is possible that some information related to the AYF may
            be misinterpreted, inaccurate, or outdated. It is always important
            to critically evaluate any information you receive and to verify it
            with multiple sources before making decisions or taking action. That
            being said, the ASEAN Secretariat and the AYF strive to provide
            accurate and up-to-date information to the public through their
            official channels, and they are committed to transparency and
            accountability in their operations.
          </div>
        </Collapse>
      </div><br />
      <center>
      <p className="title-qna"><h2>Ready To Change Asean ?</h2> </p>
      <div className="button2">  <a href="#">LET'S JOIN US</a></div>
        </center><br /><br />
      
    </>
  );
}

export default Qna;
