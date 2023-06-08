import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {useState, useEffect} from 'react';
import { signIn, signOut, useSession, getProviders} from 'next-auth/react'; 
const Nav = () => {

    return (
        <nav className="w-full mb-16 pt-3 align-middle justify-center">
            <Link href="/" className="center"> Workscape</Link>
        </nav>
    )
}

export default Nav