**Orlando**

Software Developer  ·  Eradani / BEON

Semester Work Record — First Half 2025

# **Professional Summary**

Software developer with a strong focus on backend Node.js/TypeScript, IBM i integration, and full-stack observability infrastructure. Over the past semester, took complete ownership of the observability layer at Eradani, delivered tooling now running in production across multiple client environments, led Guided Dev client engagements, and expanded technical scope into IBM i and DevOps practices. Recognized by the team for speed, quality, and real business impact.

# **Major Accomplishments**

## **Observability Platform — @eradani-inc/observability**

Took full ownership of telemetry capture and storage for Eradani Connect. Redesigned the existing solution from scratch into a modular, installable npm package deployable across all projects:

* Replaced deprecated libraries with the OpenTelemetry SDK for standards-compliant instrumentation

* Built an Agent Skill for easy, consistent instrumentation across projects

* Implemented log-trace correlation using Tempo \+ Loki derived fields for end-to-end request tracking

* Delivered dedicated Grafana dashboards with custom alerting per client environment

* Managed versioning across V2, V2.1, and V3 of the package — deployed to Amports and Ward Transport

* Maintained an open PR on ec-dashboards repo's /Monitoring/updates branch

This tooling has been directly cited by the sales team as a factor in closing new clients, particularly in the growing EDI product area.

## **Docker-Based Observability Infrastructure**

* Designed and maintained the Docker stack supporting the full observability pipeline: Prometheus, Grafana, Loki, Tempo, and OpenTelemetry

* Resolved Docker Swarm overlay network DNS issues (host.docker.internal → service name resolution)

* Fixed Grafana datasource UID mismatches and Loki-Tempo derived field correlation

* Integrated Grafana MCP for automated dashboard updates

* Authored a formal architecture proposal for a Grafana Alloy \+ Mimir \+ MinIO collector-based stack, presented to the Chief Architect

## **Guided Dev Client Engagements**

* Took on a significant portion of the Guided Dev responsibility from the Chief Architect

* Led direct client sessions helping teams onboard onto Eradani Connect

* Resolved issues in real time on client calls during test-and-refinement phases

* Managed spec changes mid-project proactively, communicating impact to management for proper estimation

## **Freight & Logistics Integrations**

* Contributed to integrations with Ward Transport, Seaboard Marine, Maven Machines, and Uber Freight

* Worked on SOAP-to-REST conversion pipelines and EDI 204 parsing

* Debugged stored procedures on IBM i: multi-result-set issues and SQL isolation levels

* Built out Geotab API integration (geotab-integration): ExecuteMultiCall, GPS/odometer feeds, device filtering, geocoding with Nominatim/US Census fallback

## **IBM i Ecosystem & DevOps Expansion**

* Ramped up on IBM i architecture: QSYS, IFS, PASE/AIX, CL commands, source physical files, library-based storage

* Worked on stored procedure development in the OPANTOJA library

* Picked up DevOps practices oriented around IBM i to relieve load on other team members

* Contributed to Git workflow operations: branch management, tagging strategy (annotated tags on integration/main after merge), stash, merge conflict resolution, selective file-level checkouts

# **Technical Skills**

## **Core Stack**

* Node.js / TypeScript — production-level proficiency; union types, discriminated unions, Zod validation

* Docker / Docker Swarm / Docker Compose — service orchestration, overlay networking, secret management

* Git — advanced branching, tagging strategies, conflict resolution, selective checkouts

## **Observability**

* OpenTelemetry SDK — instrumentation, OTLP exporters, PM2 cluster mode integration

* Prometheus / Grafana / Loki / Tempo — full stack, including PromQL for multi-instance setups

* Winston — log/trace correlation with OpenTelemetry

* Grafana MCP integration for automated dashboard management

## **IBM i / AS400**

* DB2 for i, stored procedures, PASE/IFS, RPG, CL

* IBM ODBC driver troubleshooting (including database locking issues in production environments)

* Library-based storage model, QSYS filesystem, source physical files

## **Integrations & APIs**

* EDI processing, SOAP-to-REST, REST API design

* Freight/logistics: Ward Transport, Seaboard Marine, Maven Machines, Uber Freight

* Geotab API: ExecuteMultiCall, GPS/odometer data, geocoding pipelines

* Authentication: Passport.js (multiple strategies), bcrypt cross-platform (PHP $2y$ → Node.js $2b$)

## **Infrastructure & Tools**

* nginx reverse proxy configuration

* Express.js architecture and middleware patterns

* Nominatim / US Census geocoding fallback strategy

* Luxon — UTC/timezone handling, DST-aware date comparison

# **Working Style & Soft Skills**

* Clear communicator — flags blockers early in daily standups, resolves directly with the person involved

* Proactive — absorbs mid-project spec changes and communicates impact to management

* Quality-focused — always tests code across multiple environments before delivery; avoids technical debt from AI-generated code by ensuring full team readability

* Flexible — has handled weekend client deployments, cross-functional responsibilities, and unfamiliar technical areas without hesitation

* Collaborative — active participant in both Eradani R\&D team and BEON community; contributes to peer support via the ticketing/support system

# **Goals — Next Semester**

* Continue consolidating as a key technical reference for observability across all Eradani products

* Make increasingly stronger architectural decisions in the observability space

* Begin contributing to the BEON community more actively — a workshop or blog post on observability or IBM i integration

* Keep growing in DevOps practices, particularly around IBM i deployments

Generated as a semester work record — May 2025\. For use as personal reference and resume source material.