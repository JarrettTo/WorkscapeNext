import NextAuth from "next-auth/next";
import Google from "next-auth/providers/google";
import GoogleProvider from 'next-auth/providers/google';

const handler = NextAuth({
    providers:[
        GoogleProvider({
            clientId:process.env.CLIENT_ID || "null",
            clientSecret:process.env.CLIENT_SECRET || "null"
        })
    ],
    async session({session} : any){

    },
    async signIn({profile} : any){

    }
})