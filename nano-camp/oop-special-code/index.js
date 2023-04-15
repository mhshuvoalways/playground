const { Guardian, Student, Teacher } = require('./Person')
const { Contact, Address } = require('./Contact')
const { Department, Subjects } = require('./university')

// // Guardian 1
const guardian = new Guardian('1', 'Mr. khaled', 'Engineer', 7500)
guardian.blood = 'O+'
guardian.contact = new Contact({ id: '1', email: 'mrkhaled@gmail.com', phone: '123456' })
guardian.contact.address = new Address(
    {
        id: '1',
        city: 'Kushtia',
        ragions: 'Khulna',
        country: 'Bangladesh',
        postalCode: 7042
    }
)

// console.log(guardian.toString())
// console.log(guardian.contact + '') //both are same
// console.log(guardian.contact.toString()) //both are same
// console.log(guardian.contact.address.country)


// Student 1
const student = new Student(1, 'Abdur Rafiq', 'ST001', guardian)
student.blood = 'A+'
student.contact = new Contact(
    {
        id: '2',
        email: 'abdurrafiq@gmail.com',
        phone: '1234566',
        alternativePhone: student.guardian.contact.phone,
        address: student.guardian.contact.address
    }
)

// // Department 1
const department = new Department(
    { id: '1', name: 'SWE' }
)
student.department = department

department.subjects = [
    new Subjects(1, 'Computer Fundamental', 4),
    new Subjects(2, 'Introduction to Computer', 3),
    new Subjects(3, 'Software Testing', 4)
]
// console.log(student.department.subjects)
// console.log(student.department.subjects)
const credit = student.department.subjects.reduce((a, b) => {
    return a += b.credit
}, 0)
// console.log('Credit: ' + credit)


// // Teacher
const dean = new Teacher(1, 'Imon Ahmed', 'EMP1001', department.subjects[0])
dean.blood = 'AB+'
dean.department = department
dean.salary = '50000'
dean.contact = new Contact(
    {
        id: 3,
        email: 'imon@gmail.com',
        phone: '0192113543',
        address: new Address(
            {
                id: 2,
                roadNo: '43BH',
                city: 'Dhaka city',
                region: 'Dhaka',
                country: 'Bangladesh',
                postalCode: '1212'
            }
        )
    }
)

const teacher1 = new Teacher(2, 'Sabbir Sumon', 'EMP1002', department.subjects[1])
teacher1.department = department
teacher1.blood = 'O+'
teacher1.salary = 40000
teacher1.contact = new Contact(
    {
        id: 4,
        email: 'ajzal@gmail.com',
        phone: '019214343',
        address: new Address(
            {
                id: 2,
                roadNo: '4K lBH',
                city: 'Dhaka city',
                region: 'Dhaka',
                country: 'Bangladesh',
                postalCode: '1212'
            }
        )
    }
)

// const teacher2 = new Teacher(3, 'Mr Zalil', 'EMP1003', department.subjects[2])
// teacher2.blood = 'AB-'
// teacher2.salary = 40000
// teacher2.contact = new Contact(
//     {
//         id: 4,
//         email: 'ruma@gmail.com',
//         phone: '019214343',
//         address: new Address(
//             {
//                 id: 2,
//                 roadNo: '4K lBH',
//                 city: 'Dhaka city',
//                 region: 'Dhaka',
//                 country: 'Bangladesh',
//                 postalCode: '1212'
//             }
//         )
//     }
// )

// department.dean = dean
// department.addTeacher(teacher1)
// department.addTeacher(teacher2)
// // console.log(student)
// // console.log(student.department)

// student.department.teachers.forEach((teach, index) => {
//     // console.log(`${index + 1}. ${teach.name} (${teach.subject.name})`)
// })

// guardian.addChild(student)
// // console.log(guardian)

// // const teacherSalary = guardian.children[0].department.teachers.reduce((acc, curr) => {
// //     acc += curr.salary
// //     return acc
// // })
// // console.log(teacherSalary)

// let count = 0
// if (student.blood === 'O+') count++
// if (student.guardian.blood === 'O+') count++
// student.department.teachers.forEach((teacher) => {
//     if (teacher.blood === 'O+') {
//         count++
//     }
// })
// // console.log(count)