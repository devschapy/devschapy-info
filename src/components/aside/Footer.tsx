import React from 'react'
import Button from '../common/Button'
import SocialItem from './SocialItem'
import { socialItems } from '@/data/socialItems'

const Footer = () => {
    return (
        <div className="w-full pb-space20 space-y-space24">
            <Button btnType='primary'>Hire Me</Button>

            <p className="text-100 uppercase text-md text-center font-semibold pt-space24 border-t border-primary-90">Find with me</p>

            <div className="flex justify-between">
                {socialItems.map((item) => <SocialItem key={item.id} {...item} />)}
            </div>
        </div>
    )
}

export default Footer