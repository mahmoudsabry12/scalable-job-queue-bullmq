import { Email } from '../models/email.model'
import { sendEmail } from '../service/email.service'

export const processEmailJob = async (data:{ email:string, message:string }) =>{

    const record = await Email.create({
        email:data.email,
        message:data.message
    })
    try {
        console.log(' Sending email to:', data.email)
        await sendEmail(data.email, data.message)
         
        record.status = 'sent'
        await record.save()
        console.log(' Email sent')

    } catch (error) {
        record.status = 'failed'
        await record.save()
    }
}