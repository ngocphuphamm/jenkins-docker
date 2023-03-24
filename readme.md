```
https://www.youtube.com/watch?v=kxoHOl_PD9E&t=579s


register gitlab
https://docs.gitlab.com/runner/install/linux-manually.html


```


## quy trinh 
```
sudo gitlab-runner register
https://gitlab.com/ngocphuphamm/jenkins-docker/-/settings/ci_cd
Enter an executor: docker, shell, ssh, virtualbox, docker-ssh+machine, custom, docker-ssh, parallels, docker+machine, instance, kubernetes:
shell
Configuration (with the authentication token) was saved in "/etc/gitlab-runner/config.toml" 



sudo usermod -aG docker gitlab-runner


edit file /etc/sudoers permission gitlab runner
vim /etc/sudoers
paste bellow at: root    ALL=(ALL:ALL) ALL
gitlab-runner ALL=(ALL) NOPASSWD: ALL
sudo gitlab-runner restart
```

