const students = [
    {name:'Thomas', score:6.4},
    {name:'Malu', score:8.6},
    {name:'Daniel', score:9.4},
    {name:'Julia', score:9.1},
]

const greatStudent = student => student.score >= 9
const getScore = el => el.score
const avg = (acc, el, i, array) => {
    if(i === array.length - 1) {
        return (acc+el) / array.length // chegou no ultimo elemento e fará o calculo da media
    } else {
        return acc + el
    }
}

console.log(
    students
        .filter(greatStudent)
        .map(getScore)
        .reduce(avg)
)