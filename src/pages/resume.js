import React from "react";
import Layout from "../components/Layout";
import styled from "@emotion/styled";
import downloadResume from "../downloads/DanahKowdan-Resume.pdf";
import { InternalLink } from "../components/Link";

const SectionTitle = styled.h1`
  font-size: 26px;
  margin: 0px;
  padding-top: 0px;
  padding-bottom: 20px;
`;
const TypeH2 = styled.h2`
  font-size: 20px;
  margin: 0px;
  padding-top: 10px;
  padding-bottom: 0px;
`;
const TypeP = styled.p`
  font-size: 18px;
  margin: 0px;
  padding-top: 10px;
  padding-bottom: 5px;
`;
const Description = styled.p`
  font-size: 18px;
  margin: 0px;
  padding-top: 10px;
  padding-bottom: 10px;
`;
const Grid = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Divider = styled.hr`
  margin-top: 40px;
  margin-bottom: 40px;
  margin-left: 100px;
  margin-right: 100px;
`;
const List = styled.ul`
  margin-top: 10px;
`;
const Item = styled.li`
  margin-bottom: 10px;
`;

const ResumePage = () => {
  return (
    <Layout>
      <title>Resume</title>
      <TypeP>
        My resume is{" "}
        <InternalLink href={downloadResume} download>
          available for download here
        </InternalLink>
        .
      </TypeP>

      <Divider />

      <SectionTitle>Education</SectionTitle>

      <Grid>
        <TypeH2>University of Washington, Seattle</TypeH2>
        <TypeH2>2019-2021</TypeH2>
      </Grid>
      <Description>
        M.S. Candidate: Medical SLP - Sept 2019 - Aug 2021 (projected)
      </Description>

      <Grid>
        <TypeH2>University of Washington, Seattle</TypeH2>
        <TypeH2>2016-2018</TypeH2>
      </Grid>
      <Description>
        Speech and Hearing Sciences - Bachelor of Science and Arts
      </Description>

      <Grid>
        <TypeH2>Bellevue College</TypeH2>
        <TypeH2>2014-2016</TypeH2>
      </Grid>
      <Description>Associate of Science</Description>

      <Grid>
        <TypeH2>American Creative Academy, Kuwait </TypeH2>
        <TypeH2>2010-2014</TypeH2>
      </Grid>
      <Description>Honors: National Honors Society Member</Description>

      <Divider />

      <SectionTitle>Languages</SectionTitle>
      <TypeP>
        Native or trilingual proficiency: English, Arabic and Somali{" "}
      </TypeP>
      <TypeP>Limited working proficiency: Spanish</TypeP>

      <Divider />

      <SectionTitle>Clinical Experience</SectionTitle>

      <Grid>
        <TypeH2>
          SLP Intern: Early Intervention at Childhaven - Seattle, WA
        </TypeH2>
        <TypeH2>Jan – Mar 2021</TypeH2>
      </Grid>
      <Description>
        Primary populations: ages 7 mo. – 3 | Language delay, ASD | Pediatric
        dysphagia, CAS
      </Description>
      <List>
        <Item>
          Observed and provided services in an Early Intervention setting.
        </Item>
        <Item>Provided language strategies using a parent-coaching model.</Item>
        <Item>
          Assessments: DAYC-2; The Rossetti Infant-Toddler Language Scale.
        </Item>
      </List>

      <Grid>
        <TypeH2>
          SLP Intern: Overlake Medical Center Acute Care – Bellevue, WA
        </TypeH2>
        <TypeH2>Oct – Dec. 2020</TypeH2>
      </Grid>
      <Description>
        Primary populations: ages 18-108 | CVA, TBI, Tracheostomy | cog-comm.,
        dementia, aphasia, dysphagia, MSD
      </Description>
      <List>
        <Item>
          Observed and provided services in an acute hospital setting.
        </Item>
        <Item>Worked predominately on dysphagia assessment and treatment.</Item>
        <Item>
          Prepared the radiology suite, various liquid barium consistencies and
          food trials for Modified Barium Swallow Studies.
        </Item>
        <Item>
          Provided texture recommendations and education to patients and their
          families regarding modifications to diet and aspiration
          precautions/risks.
        </Item>
        <Item>
          Trained on EPIC and able to document patient sessions, charges and
          education.
        </Item>
        <Item>
          Provided cognitive evaluations and education as appropriate.
        </Item>
        <Item>
          Other areas of emphasis and observation include: stroke and ICU rounds
          and FEES.
        </Item>
        <Item>Assessments: CLQT+; SLUMS; ACE III.</Item>
      </List>

      <TypeH2>
        Graduate Student Clinician – University of WA Speech and Hearing Clinic
        – Seattle, WA
      </TypeH2>
      <Grid>
        <TypeP>Adult Neurogenic Evaluation and Treatment Rotations</TypeP>
        <TypeP>Winter & Summer 2020</TypeP>
      </Grid>
      <List>
        <Item>
          Primary populations: ages 30-83 | CVA, TBI, PPA | aphasia, AOS,
          dysarthria, cog-comm
        </Item>
        <Item>Assessments: CLQT+; RBANS; WAB.</Item>
      </List>

      <Grid>
        <TypeP>Pediatric Evaluation and Treatment Rotation</TypeP>
        <TypeP>Fall 2019 & Summer 2020</TypeP>
      </Grid>
      <List>
        <Item>
          Primary populations: ages 3-13 | Specific Language Impairment, ASD |
          phonological & articulation disorders, social-communication disorder
        </Item>
        <Item>Assessments: CELF-5; GFTA.</Item>
      </List>

      <TypeP>
        <i>Additional:</i> MBS Impairment Profile Certification, Northern Speech
        Services | SPEAK OUT! & LOUD Crowd Training for graduate students
      </TypeP>
      <TypeP>
        <i>In progress:</i> Projected completion February 2021
      </TypeP>

      <Divider />

      <SectionTitle>Volunteer/Community Work</SectionTitle>

      <Grid>
        <TypeH2>Somali Community Services of Seattle</TypeH2>
        <TypeH2>Winter 2020 -</TypeH2>
      </Grid>
      <Description>Volunteer</Description>
      <List>
        <Item>
          Created and facilitated workshops that invited adult-focused
          Speech-Language Pathologists to educate caregivers on the impact of
          acquired neurological diseases on communication as a result of gunshot
          wounds.
        </Item>
        <Item>
          Presented PowerPoint presentations and infographics on the language
          profiles of adolescents and adults with TBI and CVA.
        </Item>
        <Item>Served as the primary translator during these workshops.</Item>
      </List>

      <Grid>
        <TypeH2>Seattle Cancer Care Alliance, Seattle, USA</TypeH2>
        <TypeH2>Summer 2017</TypeH2>
      </Grid>
      <List>
        <Item>
          Observed speech and articulation assessment conducted by a speech
          pathologist.
        </Item>
        <Item>
          Observed speech and swallowing therapy for head and neck cancer (HNC)
          patients.
        </Item>
        <Item>Observed FEES and MBSS for individuals with HNC.</Item>
        <Item>Learned how to assess patient readiness for AAC devices.</Item>
      </List>

      <Grid>
        <TypeH2>
          Bellevue College Multi-Cultural Services (MCS)/Disability Resource
          Center (DRC), Bellevue, USA
        </TypeH2>
        <TypeH2>Fall 2014 - Fall 2016</TypeH2>
      </Grid>
      <Description>Tutor</Description>
      <TypeP>
        Tutored students with Autism Spectrum Disorders, as well as others
        learning disabilities, in Math, Chemistry, Biology and English at
        Bellevue College.
      </TypeP>

      <Divider />

      <SectionTitle>Work Experience</SectionTitle>

      <TypeH2>I-LABS</TypeH2>
      <Grid>
        <TypeH2>Auxiliar de Conversacion, Madrid, Spain</TypeH2>
        <TypeH2>Sept 2018 – June 2019</TypeH2>
      </Grid>
      <List>
        <Item>
          Implemented the Sparkling curriculum, a play-based English language
          instruction curriculum developed by Patricia Kuhl and Naja Ferjan
          Ramirez of the Institute for Learning and Brain Sciences (I-LABS) in
          an Escuela Infantil in collaboration with Spanish teachers and
          Sparkling certified co-teachers.
        </Item>
        <Item>
          Participated in daily prep meetings with co-teachers, where we
          discussed the best methods to aid our student’s English productions
          and overall interaction to contribute to I-LABS’ bilingual research.
        </Item>
        <Item>
          Assured that each child in 3 separate classes of 1-2 year olds
          received at least 50 minutes of English per day.
        </Item>
        <Item>
          Supervised and transferred monthly sound recordings of our students'
          English production using LENA.
        </Item>
        <Item>
          Administered the Peabody Picture Vocabulary Test in English.
        </Item>
      </List>

      <Grid>
        <TypeH2>Fred Hutch Cancer Research Center</TypeH2>
        <TypeH2>June – Aug 2017</TypeH2>
      </Grid>
      <Description>Intern, STTR: Head and Neck Cancer Unit</Description>
      <List>
        <Item>
          Contributed to the formation of Oncoscape, a data-visualization and
          exploratory analysis, of both molecular and clinical cancer,
          pertaining to head and neck cancer research.
        </Item>
        <Item>
          Entered data via Oncoscape to further personalize medicine for head
          and neck cancer patients.
        </Item>
        <Item>
          Created a literature review of the best practices in specimen
          management to transform the way biospecimens were collected,
          processed, stored, and audited at this center.
        </Item>
      </List>

      <Divider />

      <SectionTitle>Team Leadership and Professional Development</SectionTitle>

      <TypeH2>
        Patient-Provider Communication for Patients with Communication Disorders
      </TypeH2>
      <TypeP>
        Learned about the various environmental and technological accommodations
        that best suit people with communication disorders. Aided in training
        medical students on the impact of hearing loss and communication
        disorders.
      </TypeP>

      <TypeH2>Mama Amaan Foundation</TypeH2>
      <TypeP>
        Member of the postpartum team that is created in partnership between the
        Somali Health Board of Tukwila and the University of Washington. Created
        workshops to assist East African immigrants and refugee communities in
        understanding their child’s speech and language development.
      </TypeP>

      <TypeH2>Webinars attended</TypeH2>
      <Grid>
        <TypeP>
          <b>"A Case Review Panel: Treating Head and Neck Cancer Survivors"</b>
        </TypeP>
        <TypeP>January 29, 2021</TypeP>
      </Grid>
      <TypeP>
        Included Joy Hesse, MA, CCC-SLP, Shelly Ryan, PT, CLT-LANA, Crystal
        Tallman, MFCS, RD, CSO, LD and Brooke Beilman, MS, CCC-SLP where they
        shared ways to optimally treat head and neck cancer survivors through
        case studies available on Tactile Medicine.
      </TypeP>

      <Grid>
        <TypeP>
          <b>
            "Acute Post-Operative Management of Total Laryngectomy in the
            Endemic Era"
          </b>
        </TypeP>
        <TypeP>November 18, 2020</TypeP>
      </Grid>
      <TypeP>
        Speakers: Bethany Fischer, M.A., CCC-SLP Natalie Tomerlin, M.S., CCC-SLP
        through InHealth Technologies Education. Learned about the modifications
        for total laryngectomy post-operative management during COVID, the
        benefits of early HME use and the unique risks faced by the total
        laryngectomy population during COVID-19.
      </TypeP>
    </Layout>
  );
};

export default ResumePage;
