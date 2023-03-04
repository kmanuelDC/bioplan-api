


export class BaseController {
    constructor() {};
    
     responseError(req, res, error) {
        let errors=[];
        typeof (error) === 'string' ? errors.push(error) : errors = error;
        return res.status(500).json({
            success: false,
            message: errors,
        })
    };

     responseSuccess(req, res, data) {
        return res.status(200).json({
            success: true,
            data
        })
    };

     responseFailValidations(req, res, errors) {
        return res.status(200).json({
            success: false,
            errors
        })
    };
}