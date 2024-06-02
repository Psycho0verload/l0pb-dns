/*
Author: Psycho0verload (29304143+Psycho0verload@users.noreply.github.com)
domains.js (c) 2024
Desc: DNS records for the domain l0pb.me
Created:  2024-05-31T18:53:19.166Z
Modified: 2024-06-02T07:28:54.965Z
*/

D('l0pb.me', regHostingDe, DnsProvider(dspHostingDe),
    AUTODNSSEC_ON,
    IGNORE("_acme-challenge"),
    A("@", "185.16.61.232"),
    AAAA("@", "2a03:4000:a:aa:6821:91ff:fee0:7101"),
    A("*", "127.0.0.1"),
    AAAA("*", "::1")
)