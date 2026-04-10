import { TechStackInline, TextSection, SoftList, CaptionedImage, BulletList, CodeSnippet } from '../components/ProjectPageComponents.jsx'

function BlackBoxPenPage() {
    return (
        <div className="flex project-page-container">
            <div className="flex flex-col card page-card">
                <div className='prose'>
                    <h1>Black-Box Penetration</h1>
                    <h4>An ethical hacking report — from reconnaissance to root. </h4>
                    <TechStackInline items={["Kali Linux", "MSF6", "Nmap", "Recon", "Privelege Escalation", "Cryptography", "Shell Scripting"]} />
                    <TextSection className="text-section" title="Overview"
                        paragraphs={[
                            <>This report documents the methodologies and operations involved in conducting a black-box penetration test on a vulnerabile Linux virtual machine running Drupal 7 CMS.</>,
                            <>Working in a team of 4, we performed reconnaissance, enumerated open services across three ports (SSH, HTTP, and RPC), and identified critical vulnerabilities in the outdated Drupal installation. Using Drupalgeddon exploits, we gained remote shell access, escalated privileges to root via a SUID misconfiguration in the find command, and demonstrated post-exploitation techniques including persistence, pivoting, and log clearing. The engagement concluded with a set of prioritized remediation recommendations targeting the outdated software stack.</>,
                        ]}
                    />
                </div>
            </div>
        </div>
    )
}


export default BlackBoxPenPage;