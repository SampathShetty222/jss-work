"use client";
import React, { useEffect, useState } from "react";
import Header from "../components/common/header";

const page = () => {
  const [activeSection, setActiveSection] = useState("section1");

  // Scroll event handler
  const handleScroll = () => {
    const sections = ["section1", "section2", "section3"];
    sections.forEach((id) => {
      const sectionElement = document.getElementById(id);
      const { top } = sectionElement.getBoundingClientRect();
      const offset = window.innerHeight * 0.1;

      if (top <= offset && top >= -offset) setActiveSection(id);
    });
  };

  const studentLinks = [
    {
      id: 1,
      title: "Scholarships",
      link: "#",
      desc: "Financial Scholarships",
      icon: "/img/student-life/scholarship.svg",
      unique: "section1",
    },
    {
      id: 2,
      title: "Mentoring Scheme",
      link: "#",
      desc: "Mentoring Programs",
      icon: "/img/student-life/user-check.svg",
      unique: "section2",
    },
    {
      id: 3,
      title: "Exam",
      link: "#",
      desc: "Examination Information",
      icon: "/img/student-life/pencil.svg",
      unique: "section3",
    },
  ];

  // Attach the scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to the clicked section
  const handleClick = (id) => {
    const sectionElement = document.getElementById(id);
    sectionElement.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
  };
  return (
    <section>
      <Header />
      <p className="text-5xl mt-20 text-center">About us</p>
      <p className="mt-5 text-center">ewasdrfgh edfghb sdfghbjn sedfgvhbjn</p>
      <p className="text-2xl mt-5">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. In sapiente
        ullam dolorem consequatur vel ipsa tempora voluptate laborum vero,
        quidem, expedita quod suscipit aperiam recusandae architecto, facilis
        dolores error laboriosam necessitatibus. Voluptates in at quae
        voluptatem, beatae id corporis quas veniam? Sed, laboriosam? Recusandae
        perferendis ut odio quia nam. Saepe eaque placeat nobis maiores aperiam
        vel neque mollitia, cupiditate inventore cumque iste sint magnam fuga
        velit laboriosam dolor, fugiat voluptatem ullam beatae asperiores.
        Libero ratione, consequuntur possimus sit magnam debitis architecto,
        quisquam ea odit perspiciatis facere aliquid? Laudantium, qui ex iste a
        voluptate obcaecati aspernatur ullam excepturi id porro aliquid vero,
        rerum veniam consectetur corrupti adipisci! Mollitia quia neque
        laboriosam consectetur quo nulla ratione aperiam, id tempora ad
        voluptatum quasi cupiditate totam veniam labore amet incidunt eum
        corporis, quae laudantium itaque? Veritatis vel dolor omnis
        exercitationem eligendi sunt fugiat ex rerum accusamus quos perferendis,
        sapiente, provident deleniti accusantium voluptatum voluptates,
        consequatur blanditiis! Laboriosam quo placeat saepe similique quae
        sequi dicta, vero exercitationem repellendus eveniet voluptate eos nisi
        iure ut nesciunt ex tempore provident enim. Accusantium nihil quaerat
        error, magni adipisci tempore maiores facilis similique cupiditate
        assumenda tenetur, esse voluptas recusandae quos at praesentium et odit
        unde quisquam quam fugit! Quidem, similique doloremque quia ut
        consequatur labore? Sint modi similique odio placeat illum, eum nesciunt
        ab minima laboriosam necessitatibus veniam quibusdam quos ad possimus,
        esse reiciendis beatae labore sed, neque reprehenderit? Eum, velit.
        Blanditiis eos consectetur itaque? Accusamus, provident. Aliquid fugit
        quam ratione distinctio harum, cum maiores, at modi ducimus
        necessitatibus eveniet eaque assumenda quasi blanditiis quisquam
        provident nulla! Exercitationem beatae animi error quae unde in mollitia
        nostrum neque, culpa quaerat alias ducimus. Dolores sapiente omnis cum
        at similique suscipit, sunt vitae? Voluptatibus libero quidem numquam
        ipsum nulla! Recusandae, harum ipsum velit reprehenderit inventore
        neque! Harum minus tempora vero voluptatem eum, repellendus maiores amet
        hic architecto alias velit doloremque, explicabo ipsam, culpa natus
        deleniti nihil? Dolores quae, totam sint porro cumque quia eos
        accusantium provident quo molestiae praesentium, perferendis iste
        blanditiis doloremque quaerat itaque odit explicabo magnam numquam eius,
        sequi suscipit quibusdam aspernatur! Similique nihil eaque expedita
        laudantium laboriosam magnam possimus accusantium blanditiis neque
        asperiores cumque at enim hic et dicta esse, dolorum tempore ratione
        velit facere distinctio numquam? Totam, eligendi voluptatem excepturi
        placeat consectetur fuga iusto error modi tenetu
      </p>

      <div className="mt-20 flex items-start">
        <div className="w-1/3 sticky top-20">
          {studentLinks.map((item) => {
            return (
              <p
                key={item.id}
                className={`cursor-pointer p-2 ${activeSection === item.unique ? "font-bold text-blue-500" : "text-gray-500"}`}
                onClick={() => handleClick(item.unique)}
              >
                {item.title}
              </p>
            );
          })}
        </div>
        <div className="w-2/3">
          <div id="section1" className="mb-20">
            <img src="/img/home/marriage-photos.png" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              praesentium nesciunt consequuntur eveniet! Vel consequatur ea
              doloribus recusandae, culpa ullam et officia animi temporibus odit
              quos modi perspiciatis placeat fugit itaque fugiat laudantium eum,
              odio cum! Animi ea illum esse ipsum soluta quasi eligendi atque
              asperiores amet ad at quaerat sit qui deserunt architecto, ab
              magnam. Ducimus magni tempore blanditiis eum perferendis sapiente
              obcaecati dicta amet animi rerum doloremque alias mollitia
              exercitationem ratione tempora expedita hic architecto praesentium
              fugiat, sunt dignissimos. Dolore dolores quia adipisci maiores
              aliquid ea deleniti. Iste in architecto aliquid laudantium et
              atque eius iure velit repellendus?
            </p>
            <p className="mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              soluta sed sint voluptate voluptatibus, iste amet nemo quisquam
              quidem expedita repellat magni qui. Doloremque voluptates nihil
              quod culpa quam fugiat, nulla deserunt reprehenderit minus quae,
              delectus assumenda recusandae. Pariatur iusto odit impedit!
              Eligendi deleniti a molestiae, ipsum harum odio at!
            </p>
          </div>

          <div id="section2" className="mb-20">
            <img src="/img/home/marriage-photos.png" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, ad
              facilis? Consectetur quas vel voluptate odit ea asperiores earum
              quidem aperiam impedit id placeat nihil accusantium veniam
              officiis ratione, harum repellat sint dolor amet nisi tempore
              rerum debitis quia. Voluptatibus dignissimos expedita nam quia
              labore vitae, quae eaque quibusdam exercitationem.
            </p>
          </div>

          <div id="section3" className="mb-20">
            <img src="/img/home/marriage-photos.png" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, ad
              facilis? Consectetur quas vel voluptate odit ea asperiores earum
              quidem aperiam impedit id placeat nihil accusantium veniam
              officiis ratione, harum repellat sint dolor amet nisi tempore
              rerum debitis quia. Voluptatibus dignissimos expedita nam quia
              labore vitae, quae eaque quibusdam exercitationem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
