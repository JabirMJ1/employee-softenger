class Utils {
    static alphabetRegex = /^[a-zA-Z0-9\_ ]+$/;

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
        fieldName: string,
        options: {
          min?: string|number
          max?: string|number
          increment?: string|number
        }
        ) {
          if(isNaN(Number(value))) return `value should be a number`
          let error = null
          if(options.min && !isNaN(Number(options.min)) && Number(options.min) > Number(value))
              error = (`${fieldName} should be greater than or equal to ${options.min}`)
          else if(options.max && !isNaN(Number(options.max)) && Number(options.max) < Number(value))
              error = (`${fieldName} should be lesser than or equal to ${options.max}`)
          else if(options.increment && !isNaN(Number(options.increment)) && Number(value) % Number(options.increment) !== 0)
              error = (`${fieldName} should be divisible by ${options.increment}`) 
    
          return error
      }
    
      static validateStringField (
        value: string,
        fieldName: string,
        options: {
          maxLength?: number,
          minLength?: number,
          required?: boolean
        }
        ) {
          let error = null

            if(options?.minLength && Number(options.minLength) > value.length)
              error = (`${fieldName} should be atleast ${options.minLength} characters`)
            else if (!this.alphabetRegex.test(value))
                error = (`${fieldName} should only contain letters, numbers, and underscores`)
            else if(options?.maxLength && Number(options.maxLength) < value.length)
                error = (`${fieldName} should be atmost ${options.maxLength} characters`)
            return error
      }
}

export default Utils