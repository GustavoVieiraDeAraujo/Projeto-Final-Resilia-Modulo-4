import CryptoJS  from "crypto-js";
import { v4 as uuidv4 } from "uuid";
import getEmoji from 'get-random-emoji'
    
export class Ticket {
  constructor(type, price, description, score) {
    const hoje = new Date()
    this.id = uuidv4()
    this.symbol = getEmoji()
    // Criptografando os campos de tipo, preço, descrição e pontuação
    this.type = CryptoJS.Rabbit.encrypt(type, '123456789').toString()
    this.price = CryptoJS.Rabbit.encrypt(price.toString(), '123456789').toString()
    this.description = CryptoJS.Rabbit.encrypt(description, '123456789').toString()
    this.score = CryptoJS.Rabbit.encrypt(score.toString(), '123456789').toString()
    this.creation_date = `🕗 ${hoje.toLocaleDateString()} => ${hoje.toLocaleTimeString()} 🕗`
    this.last_update = `🕗 ${hoje.toLocaleDateString()} => ${hoje.toLocaleTimeString()} 🕗`
  }
}