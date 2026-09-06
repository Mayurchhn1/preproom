# Vega Development Friction Log

These entries document actual development friction encountered while building
and validating PrepRoom during the Amazon Developer Hackathon.

## 1. Vega project generation stalled during template installation

**Task attempted:** Generate a React Native Vega application from the official
`helloWorld` template.

**Steps taken:**
1. Installed and validated the Vega SDK and CLI.
2. Attempted to generate the project using the `helloWorld` template.
3. The template dependency installation stalled/timed out while retrieving the
   npm package tarball.

**Expected result:** The Vega project generator should complete template
installation and create the application project.

**Actual result:** Template installation initially timed out.

**Severity:** High

**Workaround:** Verified the published `@amazon-devices/ks-app` package and
used `npm pack` to warm the npm cache, after which project generation
completed successfully.

**Actionable suggestion:** The Vega project generator should provide clearer
progress/error reporting for template package downloads and a documented
recovery path for npm network timeouts.

## 2. Node HTTPS/network resolution affected npm dependency installation

**Task attempted:** Install the generated project's dependencies.

**Steps taken:**
1. Ran `npm install` in the generated Vega project.
2. Dependency installation encountered network transport timeouts.
3. Tested the Node networking behavior.
4. Re-ran the installation with
   `NODE_OPTIONS=--dns-result-order=ipv4first`.

**Expected result:** `npm install` should resolve and download dependencies
normally.

**Actual result:** The initial installation experienced network timeouts.
Using the IPv4-first Node option allowed the installation to complete.

**Severity:** Medium

**Workaround:** Used the process-scoped
`NODE_OPTIONS=--dns-result-order=ipv4first` setting for npm operations.

**Actionable suggestion:** Vega onboarding documentation could include
network troubleshooting guidance for Node/npm environments where IPv6 DNS
resolution causes registry connection problems.

## 3. Vega Studio initially had no active target device

**Task attempted:** Install and run the application from Vega Studio.

**Steps taken:**
1. Opened the project in VS Code with Vega Studio.
2. Attempted to run/install the application.
3. Vega Studio did not have an active target device available.
4. Started the Vega Virtual Device.
5. Re-ran the application from Vega Studio.

**Expected result:** The project should have a clear, discoverable path from
opening the project to selecting or starting a target device.

**Actual result:** The application could not be run until the Virtual Device
was started.

**Severity:** Medium

**Workaround:** Started the Vega Virtual Device and then installed/ran the
application successfully.

**Actionable suggestion:** Vega Studio could surface a clearer first-run
prompt or automatic device-start workflow when no target device is available.