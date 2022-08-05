
import Content from "./components/Content";
import Header from "./components/Header";
import Total from "./components/Total";
import { CoursePart } from "./types";

const App = () => {
  const courseName = "Half Stack application development";

  const courseParts: CoursePart[] = [
    {
      name: "Fundamentals",
      exerciseCount: 10,
      description: "This is the easy course part",
      type: "normal"
    },
    {
      name: "Advanced",
      exerciseCount: 7,
      description: "This is the hard course part",
      type: "normal"
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7,
      groupProjectCount: 3,
      type: "groupProject"
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14,
      description: "Confusing description",
      exerciseSubmissionLink: "https://fake-exercise-submit.made-up-url.dev",
      type: "submission"
    },
    {
      name: "Backend development",
      exerciseCount: 21,
      description: "Typing the backend",
      requirements: ["nodejs", "jest"],
      type: "special"
    }
  ]

  const assertNever = (value: never): never => {
    throw new Error(
      `Unhandled discriminated union member: ${JSON.stringify(value)}`
    );
  };

  // courseParts.forEach(part => {

  // })

  return (

    <div>
      <Header name={courseName} />
      {courseParts.map((part) => {
        switch (part.type) {
          case 'normal':
            return <Content
              key={part.name}
              name={part.name}
              exerciseCount={part.exerciseCount}
              description={part.description}
            />

          case 'groupProject':
            return <Content
              key={part.name}
              name={part.name}
              exerciseCount={part.exerciseCount}
              groupProjectCount={part.groupProjectCount}
            />
          case 'submission':
            return <Content
              key={part.name}
              name={part.name}
              exerciseCount={part.exerciseCount}
              description={part.description}
              exerciseSubmissionLink={part.exerciseSubmissionLink}
            />
          case 'special':
            return <Content
              key={part.name}
              name={part.name}
              exerciseCount={part.exerciseCount}
              description={part.description}
              requirements={part.requirements}
            />
          default:
            return assertNever(part);
        }

      })}

      <Total courseParts={courseParts} />
    </div>

  );
};

export default App;