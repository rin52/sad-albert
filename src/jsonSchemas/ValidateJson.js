import Ajv from "ajv"
import Constants from '../helper/Constants';
import DndHomebrewSatchelSchema from './DndHomebrewSatchelSchema';
import WttrpgSatchelSchema from './WttrpgSatchelSchema';

export default function validateJson(data, chosenSetting) {
    const schema = chosenSetting === Constants.DND_HOMEBREW ? DndHomebrewSatchelSchema : WttrpgSatchelSchema;

    const ajv = new Ajv() // options can be passed, e.g. {allErrors: true}
    const validate = ajv.compile(schema)
    const valid = validate(JSON.parse(data));
    
    return {
        valid,
        errors: !valid ? validate.errors : '',
    }
}
