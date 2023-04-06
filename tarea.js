koder = {
    name: "Leonardo",
    interviewed: false,
    isEnrolled: false,
    proposalSent: false,
    introductoryCourse: false
}

function interview (koderToInterview, callback){
    console.log("Llenando formulario")
    setTimeout(()=>{
        let error = null
        koderToInterview.interviewed = true
        error = !koderToInterview.interviewed ? `Error en la entrevista con ${koderToInterview.name}` : null
        callback (error, koderToInterview)
    }, 3000)    
}

function enroll (koderToEnroll, callback){
    console.log("Inscribiendo al Koder")
    setTimeout(()=>{
        let error = null
        koder.isEnrolled = true
        error = !koder.isEnrolled ? `Error en la inscripcion con ${koderToEnroll.name}` : null
        callback (error, koderToEnroll)
    }, 5000)
}

function sendProposal (koderToPropose, callback){
    console.log("Enviando propuesta")
    setTimeout(()=>{
        let error = null
        koder.proposalSent = true
        error = !koder.proposalSent ? `Error en la Propuesta de ${koderToPropose.name}` : null
        callback (error, koderToPropose)        
    }, 7000)
}

function introduction (koderToIntroduce, callback){
    console.log("Tomando curso de introduccion")
    setTimeout(()=>{
        let error = null
        koder.introductoryCourse = true
        error = !koder.introductoryCourse ? `Error en la introduccion de ${koderToIntroduce.name}` : null
        callback (error, koderToIntroduce)
    }, 9000)
}

interview(koder, (error, interviewedKoder) => {
    if (error){
        console.log("", error)
    } else {
    console.log(`${interviewedKoder.name} ha sido entrevistado.`)
    console.log(interviewedKoder)}

    enroll(koder, (error, enrolledKoder) => {
        if (error){
            console.log("", error)
        }
        console.log(`${enrolledKoder.name} ha sido inscrito.`)
        console.log(enrolledKoder)

        sendProposal(koder, (error, proposedKoder) => {
            if (error){
                console.log("", error)
            }
            console.log(`${proposedKoder.name} ha enviado su propuesta.`)
            console.log(proposedKoder)

            introduction(koder, (error, introducedKoder) => {
                if (error){
                    console.log("", error)
                }
                console.log(`${introducedKoder.name} ha tomado su curso de introduccion.`)
                console.log(introducedKoder)
                const finishedKoder = JSON.stringify(introducedKoder)
                let fs = require('fs');
                fs.appendFile('koderRegistry.txt', finishedKoder , function (err) {
                    if (err) throw err;
                    console.log('Koder guardado!');
                  });
            })
        })
    })
})
