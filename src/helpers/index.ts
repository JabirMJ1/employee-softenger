
class Utils {
    static generate_id(length: number) {
        let result = "";
        let characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    
    static isSSR = () => typeof window === 'undefined'

    static validateNumericField (
        value: string|number,
        options: {
          min?: string|number
          max?: string|number
          increment?: string|number
        }
        ) {
          console.log(options.min , !isNaN(Number(options.min)) , Number(options.min) > Number(value))
          if(isNaN(Number(value))) return `value should be a number`
          let error = null
          if(options.min && !isNaN(Number(options.min)) && Number(options.min) > Number(value))
              error = (`${value} should be greater than or equal to ${options.min}`)
          else if(options.max && !isNaN(Number(options.max)) && Number(options.max) < Number(value))
              error = (`${value} should be lesser than or equal to ${options.max}`)
          else if(options.increment && !isNaN(Number(options.increment)) && Number(value) % Number(options.increment) !== 0)
              error = (`${value} should be divisible by ${options.increment}`) 
    
          return error
      }
    
      static validateStringField (
        value: string,
        options: {
          maxLength?: number,
          required?: boolean
        }
        ) {
          let error = null
          if(options.maxLength && options.maxLength < value.length)
              error = (`${options.maxLength} is the max length`)
          
          return error
      }
}

export default Utils