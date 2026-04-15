import { TechStackInline, TextSection, SoftList, CaptionedImage, BulletList, CodeSnippet, Table } from '../components/ProjectPageComponents.jsx'

const scans = [
    { scan: "Full port scan", command: "nmap -p-", result: "Revealed 3 open ports" },
    { scan: "Scan variations", command: "nmap -sT, -sF, -sX, -sn", result: "All variations revealed the same 3 open ports" },
];

function BlackBoxPenPage() {
    return (
        <div className="flex project-page-container">
            <div className="flex flex-col card page-card">
                <div className='prose'>
                    <h1>Black-Box Penetration</h1>
                    <h4>An ethical hacking report — from reconnaissance to root. </h4>
                    <TechStackInline items={["Kali Linux", "MSF6", "VirtualBox", "Recon", "Privelege Escalation", "Cryptography", "Shell Scripting"]} />
                    <TextSection className="text-section" title="Overview"
                        paragraphs={[
                            <>This report documents the methodologies and operations involved in conducting a black-box penetration test on a vulnerabile Linux virtual machine running Drupal 7 CMS.</>,
                            <>Working in a team of 4, we performed reconnaissance, enumerated open services across three ports (SSH, HTTP, and RPC), and identified critical vulnerabilities in the outdated Drupal installation. Using Drupalgeddon exploits, we gained remote shell access, escalated privileges to root via a SUID misconfiguration in the find command, and demonstrated post-exploitation techniques including persistence, pivoting, and log clearing. The engagement concluded with a set of prioritized remediation recommendations targeting the outdated software stack.</>,
                        ]}
                    />
                    <TextSection className="text-section" subtitle="Test Period"
                        paragraphs={[
                            <>The penetration test was performed over the course of 3 weeks starting on April 20, 2025, and ending on May 7, 2025. The target was a black-box virtual machine run in VirtualBox. No restrictions were established."</>
                        ]}
                    />
                    <TextSection className="text-section" title="Penetration Phases">

                        <TextSection className="text-section" subtitle="Reconnaissance & Enumeration" paragraphs={["Using Nmap, Nikto, and Gobuster, three open ports were identified: SSH(20), HTTP(80), RPC(111) - and identified the target as a Debian Linux machine running an outdated Drupal 7 CMS. Web enumeration revealed sensitive publicly accessible files and confirmed several outdated, Wappalyzer confirmed the full software stack: Drupal 7, Apache 2.2.22, PHP 5.4.45, and jQuery 1.4.4 — every component of which was outdated and carrying known vulnerabilities."]} />

                        <Table
                            columns={["Command", "Result"]}
                            rows={[
                                [<code>nmap -p-</code>, "Revealed 3 open ports"],
                                [<code>nmap -sT, -sF, -sX, -sn</code>, "All variations revealed the same 3 open ports"],
                                [<code>nmap -sV, -O</code>, "Revealed running services and their versions" ],
                                [<code>nmap --script="vuln"</code>, "Revealed vulnerability in the HTTP service"],
                                [<code>nmap --script="banner"</code>, "Enumerated RPC services"],
                                [<code>nikto -h, gobuster</code>, "Enumerated directories and files"]
                            ]}
                        />

                        <TextSection subtitle="Target Services"/>
                        <Table
                            columns={["Port", "Service", "Version"]}
                            rows={[
                                ["22", "OpenSSH", "6.0p1 Debian 4+debu7u7 (protocol 2.0)"],
                                ["80", "Apache httpd", "2.2.22 (Debian)"],
                                ["111", "rpcbind", "2-4 (RPC #100000)"],
                            ]}
                        />

                        <TextSection className="text-section" subtitle="Gaining Access" paragraphs={["Leveraging critical Drupalgeddon vulnerabilities (CVE-2018-7600), we achieved remote code execution via both Metasploit and a standalone Python exploit, establishing a reverse shell on the target machine. An additional method involved exploiting a SQL injection vulnerability to create a rogue admin user on the Drupal site."]} />

                        <TextSection className="text-section" subtitle="Post Exploitation"
                            paragraphs={["Leveraging critical Drupalgeddon vulnerabilities (CVE-2018-7600), the team achieved remote code execution via both Metasploit and a standalone Python exploit, establishing a reverse shell on the target machine. An additional method involved exploiting a SQL injection vulnerability to create a rogue admin user on the Drupal site."]} />

                    </TextSection>

                    <TextSection className="text-section" title="Vulnerabilities Identified"
                        paragraphs={["Two critical (9.8) remote code execution flaws in Drupal 7, a high-severity SQL injection, an Apache memory disclosure vulnerability, and an XSS weakness in the jQuery version in use"]} />

                </div>
            </div>
        </div>
    )
}


export default BlackBoxPenPage;