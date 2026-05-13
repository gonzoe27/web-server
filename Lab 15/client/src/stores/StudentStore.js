import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { mande } from 'mande'

const studentAPI = mande('api/students')

export const useStudentStore = defineStore('students', () => {

    const sortedStudents = ref([])

    const mostRecentStudent = ref( {} )

    const addNewStudentErrors = ref ([])

    function getAllStudents() {
        //make an api request to get all students and save in store -studentlist
        studentAPI.get().then( students => { //students is the response from api
            sortedStudents.value = students
        }).catch(err => {
            addNewStudentErrors.value = err.body
        })
    }

    function addNewStudent(student) {
        //make api call to add new student
        //call getAllStudents to re-request list of students from api server
        studentAPI.post(student).then( resp => {
            getAllStudents()
        }).catch(err => {
            addNewStudentErrors.value = err.body
        })
    }

    function deleteStudent(studentToDelete) {
        // //TODO MAKE API REQUEST
        // studentList.value = studentList.value.filter( (student) => {
        //     return studentToDelete != student
        // })

        const deleteStudentAPI = mande(`/api/students/${studentToDelete.id}`);
        deleteStudentAPI.delete().then( () => {
            getAllStudents();
        }).catch(err => {
            addNewStudentErrors.value = err.body
        })

    }

    function arrivedOrLeft(student) {
        //TODO MAKE API REQUEST
        // Returns -1 if the student is not found
        // const studentToModifyIndex = studentList.value.findIndex(s => s.starID == student.starID)
        // if (studentToModifyIndex != -1) {
        //     mostRecentStudent.value = student
        //     studentList.value[studentToModifyIndex] = student


        const editStudentAPI = mande(`/api/students/${student.id}`)
        editStudentAPI.patch(student).then( () => {
            mostRecentStudent.value = student
            getAllStudents()
        }).catch(err => {

            addNewStudentErrors.value = err.body
        })
    }


    // const sortedStudents = computed( () => {
    //     return studentList.value.toSorted( (s1, s2) => {
    //         return s1.name.localeCompare(s2.name)
    //     })
    // })

    const studentCount = computed( () => {
        return sortedStudents.value.length
    })

    return { 
        // reactive data
        //studentList,
        sortedStudents,
        mostRecentStudent,
        addNewStudentErrors,



        // functions
        addNewStudent, 
        deleteStudent, 
        arrivedOrLeft,
        getAllStudents,

        // computed properties

        studentCount
    }
//
})