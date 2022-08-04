import inquirer from "inquirer"
import chalk from "chalk"

inquirer.prompt(
    [{
        name:'user_name',message:'Digite o nome do usuario: '
    },
    {
        name:'user_age',message:'Digite sua idade: '
    }]).then(
        (answers) => {
            try{
                if(!Number(answers.user_age)){
                    throw new Error(chalk.bgRed.white('A idade deve conter apenas numeros'))
                }else{
                    console.log(chalk.bgYellow.black(`Nome: ${answers.user_name}, Idade: ${answers.user_age}`))
                }
            }catch(err){
                console.log(err)
            }       
    }
    ).catch(
        (err) => {
        console.log(err)
    })
