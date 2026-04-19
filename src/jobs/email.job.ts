import { Email } from '../models/email.model'

export const processEmailJob = async (data:{ email:string, message:string }) =>{

    const record = await Email.create({
        email:data.email,
        message:data.message
    })
    try {
        console.log(' Sending email to:', data.email)
        await new Promise(res => setTimeout(res,2000)) 
         
        record.status = 'sent'
        record.save()
        console.log(' Email sent')

    } catch (error) {
        record.status = 'failed'
        await record.save()
    }
}