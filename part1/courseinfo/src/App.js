import React from 'react'

const Header = ({ course }) => {
  console.log(course)
  return <h1>{course.name}</h1>
  }

const Content = ({ course }) => {
  console.log(course)
  return (
    <>
    <Part part={course.parts[0]} />
    <Part part={course.parts[1]} />
    <Part part={course.parts[2]} />
    </>
    )
}

const Total = ({ course }) => {
  console.log(course)
  return ( <p> Number of exercises {course.parts[0].exercises + 
                      course.parts[1].exercises + course.parts[2].exercises}</p> )
}

const Part = ({ part }) => {
  console.log(part)
  return <p> {part.name} {part.exercises}</p>
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />

    </div>
  )
}

export default App