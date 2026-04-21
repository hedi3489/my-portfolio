import { TechStackInline, TextSection, SoftList, CaptionedImage, BulletList, CodeSnippet, Table } from '../components/ProjectPageComponents.jsx'

const scans = [
    { scan: "Full port scan", command: "nmap -p-", result: "Revealed 3 open ports" },
    { scan: "Scan variations", command: "nmap -sT, -sF, -sX, -sn", result: "All variations revealed the same 3 open ports" },
];

function BlackBoxPenPage() {
    return (
        <div className="flex project-page-container" style={{ "--page-accent-color": "rgb(110, 165, 255)" }}>
            <div className="flex flex-col card page-card">
                <div className='prose'>
                    <h1>Black-Box Penetration</h1>
                    <h4>An ethical hacking report — from reconnaissance to root. </h4>
                    <TechStackInline items={["Kali Linux", "MSF6", "VirtualBox", "Recon", "Privelege Escalation", "Cryptography", "Shell Scripting"]} />
                    <TextSection className="text-section" title="Overview"
                        paragraphs={[
                            "This report documents the methodologies and operations involved in conducting a black-box penetration test on a vulnerable Linux virtual machine. The target was a black-box virtual machine run in VirtualBox. No restrictions were established."
                        ]}
                    />
                    <TextSection className="text-section" subtitle="Test Period"
                        paragraphs={[
                            "The penetration test was performed over 3 weeks starting on April 20, 2025, and ending on May 7, 2025."
                        ]}
                    />

                    <TextSection className="text-section" title="Reconnaissance & Enumeration" paragraphs={[<>Using Nmap, Nikto, and Gobuster, the target was fingerprinted as a Debian Linux machine running an outdated <b className='accented'>Drupal CMS</b>, revealed three open ports: <u>SSH, HTTP, and RPC</u>.</>]} />
                    <Table
                        columns={["Command", "Result"]}
                        rows={[
                            ["nmap -sT, -sF, -sX, -sn", "Revealed the ports 20, 80, and 111"],
                            ["nmap -sV, -O", "Revealed open ports' services and versions"],
                            ['nmap --script="vuln"', "Revealed vulnerability in the HTTP service"],
                            ['nmap --script="banner"', "Enumerated RPC subservices"],
                            ["nikto, gobuster", "Enumerated sensitive directories and files"]
                        ]}
                    />
                    <br />
                    <TextSection paragraphs={[<>Web enumeration further revealed sensitive directories and files, and Wappalyzer confirmed the full software stack - every component of which was outdated and carrying known vulnerabilities:</>]} />

                    <Table
                        columns={["Port", "Software", "Version"]}
                        rows={[
                            [<b className="accented">-</b>, <b className="accented">Drupal</b>, <b className="accented">7</b>],
                            ["22", "OpenSSH", "6.0p1 Debian 4+debu7u7 (protocol 2.0)"],
                            ["80", "Apache httpd", "2.2.22"],
                            ["111", "rpcbind", "2-4"],
                            ["-", "PHP", "5.4.45"],
                            ["-", "jQuery", "1.4.4"],
                        ]}
                        center={[0]}
                    />

                    <TextSection className="text-section" title="Gaining Access" paragraphs={[
                        <>Three distinct methods were used to gain access to the target. The primary method used Metasploit's <u className="accented"><b>Drupalgeddon 2 module (CVE-2018-7600)</b></u>, a critical remote code execution vulnerability affecting Drupal versions below 7.58. This required minimal configuration and immediately yielded a Meterpreter shell through which the first flag was recovered.</>,
                        <>The second method used a standalone Python exploit for the same CVE sourced from GitHub, establishing a reverse shell by setting up a netcat listener and executing a remote command.</>,
                        <>A third method exploited a <b className="accented"><u>SQL injection vulnerability (CVE-2014-3704, Drupalgeddon 1)</u></b> to inject a rogue administrator account into the Drupal database, granting full administrative access to the CMS front-end, through which a third flag was found embedded in a dashboard node.</>]} />

                    <TextSection className="text-section" title="Privelege Escalation" paragraphs={[
                        <>Shell access was initially limited to a regular user, prompting a pursuit of privilege escalation. Several avenues were explored and ultimately failed: /etc/passwd was read-only, cron job directories lacked write permissions, and LinEnum produced script errors.</>,
                        <>The successful method involved identifying binaries with the SUID bit set — meaning they execute with the permissions of their owner rather than the calling user. Among the SUID-enabled binaries found in <code>/usr/bin</code>, the <code>find</code> command had a documented exploitation path on <b>GTFOBins</b>. By executing a shell through <code>find</code> using the <code>-exec</code> flag, we obtained a root shell without privilege dropping, a key nuance on Debian systems where the <code>-p</code> flag must be omitted.</>, <>From root, the final flag was recovered.</>]} />

                    <TextSection className="text-section" title="Post-Exploitation" paragraphs={[
                        <>With root access, we demonstrated some post-exploitation scenarios.</>,

                        <>For persistence, a backdoor user was manually added to /etc/passwd, /etc/shadow, /etc/group, and the sudoers file, with SSH access confirmed. A boot-time reverse shell was also configured by modifying /etc/rc.local to execute an <b className='accented'>msfvenom-generated</b> ELF payload on startup, maintaining access across reboots.</>,

                        <>For credential harvesting, /etc/passwd and /etc/shadow were unshadowed and cracked using <b className='accented'>John the Ripper</b>, successfully cracking the aforementioned regular user's password. The root password, however, resisted two hours of cracking attempts.</>,

                        <>For pivoting, we placed the target on a bridged network adapter alongside a third machine (Metasploitable2), used <b className='accented'>Metasploit's autoroute module</b>  to route traffic through the compromised host, conducted a port scan of the new subnet, and accessed the third machine via a <b className='accented'>Samba vulnerability</b>.</>,

                        <>Finally, tracks were cleared by wiping Apache access and error logs, removing the backdoor user from all relevant system files, and deleting injected database users from the Drupal MySQL database.</>
                    ]} />

                    <TextSection title="Common Vulnerability Exploits"/>
                    <Table
                        colorScale={[0]}
                        center={[0, 1, 2,]}
                        widths={["16%", "16%", "22%"]}
                        columns={["Severity", "Type", "Platform", "Name"]}
                        rows={[
                            ["9.8", "RCE", "Drupal 7", "Drupalgeddon 2 CVE-2018-7600"],
                            ["9.8", "RCE", "Drupal 7", "Drupal Core RCE CVE: 2018-7602"],
                            ["7.5", "SQL Injec.", "Drupal 7", "Drupageddon 1 CVE-2014-3704"],
                            ["7.5", "Data Leak", "Apache 2.2-2.4", "Use After Free CVE: 2017-9798"],
                            ["7.5", "DoS", "PHP 5-5.6", "CVE: 2016-7478"],
                            ["6.1", "XSS", "Drupal < 7.57, jQuery 1.4.4", "Improper Neutralization of Input CVE: 2017-6929"],
                            ["5.8", "Remote", "Apache 2-2.3", "CVE: 2013-2248"],
                            ["5.4", "XSS", "Drupal 7", "CVE: 2019-6341"],
                        ]}
                    />
                </div>
            </div>
        </div>
    )
}


export default BlackBoxPenPage;