import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export default function Sidebar() {
  return (
    <>
      <ul class="services-list">
        <li><a href="/our-solutions/experiential-learning">Experiential Learning</a></li>
        <li><a href="/our-solutions/leadership-and-talent-development">Leadership & Performance</a></li>
        <li><a href="/our-solutions/assessments">Assessments</a></li>
        <li><a class="" href="#">BeSpoke</a></li>
        <li><a href="/our-solutions/staffing">Staffing & Search</a></li>
        <li><a class="" href="/our-solutions/coaching">Coaching</a></li>
      </ul>

    <div class="services-addc ptt-40 pbb-30">
        <div class="rs-videos address-item mb-35">
            <div class="address-icon">
                <i class="fa fa-phone"></i>
            </div>
        </div>
        <h2 class="title">Have any Questions? Call us Today!</h2>
        <div class="sec-title text-center">
            <h2 class="title title2">
                <a href="tel:1800-102-1345">1800-102-1345</a><br></br>
                <a href="mailto:info@byldgroup.com">info@byldgroup.com</a>
            </h2>
        </div>
    </div>
    </>
  )
}
