/*
Author: Psycho0verload (29304143+Psycho0verload@users.noreply.github.com)
dnsconfig.js (c) 2024
Desc: Configuration file for DNSControl
Created:  2024-05-31T18:45:38.251Z
Modified: 2024-06-02T07:28:22.414Z
*/

var regHostingDe = NewRegistrar("hostingDe");
var dspHostingDe = NewDnsProvider("hostingDe");

require_glob("./domains/", false);