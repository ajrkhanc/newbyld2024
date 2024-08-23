import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export default function Header() {
    return (
        <>
            <div class="navik-header header-shadow">
                <div class="container-fluid">

                    <div class="navik-header-container">

                        <div class="logo col-md-4 col-8">
                            <a href="/cruciallifechangingskills"><img src="/classets/img/cruciallifechangingskills-logo.svg" alt="logo" /></a>
                        </div>

                        <div class="burger-menu">
                            <div class="line-menu line-half first-line"></div>
                            <div class="line-menu"></div>
                            <div class="line-menu line-half last-line"></div>
                        </div>

                        <nav class="navik-menu menu-caret submenu-top-border submenu-scale col-md-8">
                            <ul class="list-unstyled">
                                <li class="current-menu"><a href="/cruciallifechangingskills"> HOME</a></li>
                                <li><a href="/cruciallifechangingskills/about-us">ABOUT US</a></li>
                                <li>
                                    <a href="/cruciallifechangingskills/browse-courses"> BROWSE COURSES</a>
                                    <ul class="list-unstyled">
                                        <li><a href="/cruciallifechangingskills/crucial-conversations-for-mastering-dialogue">Crucial Conversations for Mastering Dialogue</a></li>
                                        <li><a href="/cruciallifechangingskills/crucial-conversations-for-accountability">Crucial Conversations for Accountability</a></li>
                                        <li><a href="/cruciallifechangingskills/the-power-of-habit">The Power of Habit</a></li>
                                        <li><a href="/cruciallifechangingskills/influencer">Crucial Influence</a></li>
                                        <li><a href="/cruciallifechangingskills/getting-things-done">Getting Things Done</a></li>
                                        {/* <li><a href="#">Dropdown menu</a>
                                      	<ul  class="list-unstyled">
                                          	<li><a href="#">Dropdown sub menu</a></li>
                                            <li><a href="#">Dropdown sub menu</a></li>
                                            <li><a href="#">Dropdown sub menu</a></li>
                                            <li><a href="#">Dropdown sub menu</a></li>
                                        </ul> 
                                    </li>   */}
                                    </ul>
                                </li>
                                <li class="submenu-right">
                                    <a href="#">EVENTS</a>
                                    <ul class="list-unstyled">
                                        <li><a href="/cruciallifechangingskills/workshops">Workshops</a></li>
                                        <li><a href="/cruciallifechangingskills/webinars">Webinars</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">RESOURCES</a>
                                    <ul class="list-unstyled">
                                        <li><a href="/cruciallifechangingskills/blog">Blog</a></li>
                                        <li><a href="/cruciallifechangingskills/ebook">E-books</a></li>
                                        <li><a href="/cruciallifechangingskills/white-paper">White Papers</a></li>
                                        <li><a href="/cruciallifechangingskills/glossary">Glossary</a></li>
                                    </ul>
                                </li>
                                <li><a href="/cruciallifechangingskills/contact-us">CONTACT US</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}
