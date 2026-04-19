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
                            "This report documents the methodologies and operations involved in conducting a black-box penetration test on a vulnerable Linux virtual machine. The target was a black-box virtual machine run in VirtualBox. No restrictions were established."
                        ]}
                    />
                    <TextSection className="text-section" subtitle="Test Period"
                        paragraphs={[
                            "The penetration test was performed over 3 weeks starting on April 20, 2025, and ending on May 7, 2025."
                        ]}
                    />

                    <TextSection className="text-section" title="Reconnaissance & Enumeration" paragraphs={[<>Using Nmap, Nikto, and Gobuster, the target was fingerprinted as a Debian Linux machine running an outdated <u>Drupal CMS</u>, revealed three open ports: <u>SSH, HTTP, and RPC</u>.</>]} />
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
                    <TextSection paragraphs={[<>Web enumeration further revealed sensitive directories and files, and Wappalyzer confirmed the full software stack - every component of which was outdated and carrying known vulnerabilities.</>]} />

                    <Table
                        columns={["Port", "Software", "Version"]}
                        rows={[
                            ["-", "Drupal", "7"],
                            ["22", "OpenSSH", "6.0p1 Debian 4+debu7u7 (protocol 2.0)"],
                            ["80", "Apache httpd", "2.2.22 (Debian)"],
                            ["111", "rpcbind", "2-4 (RPC #100000)"],
                            ["-", "PHP", "5.4.45"],
                            ["-", "jQuery", "1.4.4"],
                        ]}
                    />

                    <TextSection className="text-section" title="Gaining Access" paragraphs={["Three distinct methods were used to gain access to the target. The primary method used Metasploit's Drupalgeddon 2 module (CVE-2018-7600), a critical 9.8-severity remote code execution vulnerability affecting Drupal versions below 7.58. This required minimal configuration and immediately yielded a Meterpreter shell, through which the first flag was recovered. A second method used a standalone Python exploit for the same CVE sourced from GitHub, establishing a reverse shell by setting up a netcat listener and executing a remote command. A third method exploited a SQL injection vulnerability (CVE-2014-3704, Drupalgeddon 1) to inject a rogue administrator account into the Drupal database, granting full administrative access to the CMS front-end, through which a third flag was found embedded in a dashboard node."]} />

                    <TextSection className="text-section" title="Privelege Escalation"
                        paragraphs={["Initial shell access was limited to the www-data user, prompting the team to pursue privilege escalation. Several avenues were explored and ultimately failed: /etc/passwd was read-only, cron job directories lacked write permissions, and LinEnum produced script errors. The successful method involved identifying binaries with the SUID bit set — meaning they execute with the permissions of their owner rather than the calling user. Among the SUID-enabled binaries found in /usr/bin, the find command had a documented exploitation path on GTFOBins. By executing a shell through find using the -exec flag, the team obtained a root shell without privilege dropping, a key nuance on Debian systems where the -p flag must be omitted. From root, the final flag was recovered."]} />

                    <TextSection className="text-section" title="Post Exploitation"
                        paragraphs={["With root access confirmed, the team demonstrated several realistic post-exploitation scenarios. For persistence, a backdoor user was manually added to /etc/passwd, /etc/shadow, /etc/group, and the sudoers file, with SSH access confirmed. A boot-time reverse shell was also configured by modifying /etc/rc.local to execute an msfvenom-generated ELF payload on startup, maintaining access across reboots. For credential harvesting, /etc/passwd and /etc/shadow were unshadowed and cracked using John the Ripper with the rockyou.txt wordlist — successfully cracking the flag4 user's password (SHA-512 hash), though the root password resisted two hours of cracking attempts. For pivoting, the team placed the target on a bridged network adapter alongside a third machine (Metasploitable2), used Metasploit's autoroute module to route traffic through the compromised host, conducted a port scan of the new subnet, and accessed the third machine via a Samba vulnerability. Finally, tracks were cleared by wiping Apache access and error logs, removing the backdoor user from all relevant system files, and deleting injected database users from the Drupal MySQL database."]} />
                </div>
            </div>
        </div>
    )
}


export default BlackBoxPenPage;