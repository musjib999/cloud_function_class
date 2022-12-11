import { ContactDao } from "../db/contactDao";
import { https } from "../settings/global";

export const getContacts = https.onRequest( async (req, res) => {
  if(req.method == 'GET'){
    const contacts = await ContactDao.getAllContact();
    if(contacts == undefined){
        res.status(500).json({status: 'failed', data: null, message: 'Cannot get all contacts'});
    }else{
        res.status(200).json({status: 'sucess', data: contacts, message: 'All contacts fetched successfully'});
    }
  }else{
    res.status(405).json({status: 'failed', data: null, message: 'Method not allowed'});
  }
});

export const getContact = https.onRequest( async (req, res) => {
    if(req.method == 'GET'){
        const id = req.query.id;
        if(id){
            const contact = await ContactDao.getOneContact(id.toString());
            if(contact == undefined){
                res.status(500).json({status: 'failed', data: null, message: 'Cannot get single contact'});
            }else{
                res.status(200).json({status: 'sucess', data: contact, message: 'Contact fetched successfully'});
            }
        }else{
            res.status(500).json({status: 'failed', data: null, message: 'id is required'});
        }
    }else{
      res.status(405).json({status: 'failed', data: null, message: 'Method not allowed'});
    }
});