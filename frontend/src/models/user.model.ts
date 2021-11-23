// import { Art } from "./art.model";
// import { Deserializable } from "./deserializable.model";

// export class User implements Deserializable {
//     id!: number;
//     username!: string;
//     art!: Art;

//     deserialize(input: any): User {
//         Object.assign(this, input);
//         this.art = new Art().deserialize(input.art);
//         return this;
//       }
      
// }