
import LegalPageLayout from "@/components/LegalPageLayout";

export default function TermsPage() {
  return (
    <LegalPageLayout
      eyebrow="Terms of Service"
      title="Terms & Conditions"
      description="The rules for accessing Revyn, connecting your repositories, and using AI-generated code review feedback."
      sections={[
        {
          title: "Acceptance of these terms",
          content: (
            <>
              <p>
                These Terms & Conditions govern your access to and
                use of Revyn, its website, and its GitHub integration.
              </p>
              <p>
                By accessing or using the service, you agree to
                these terms and applicable laws. If you do not agree,
                do not use the service.
              </p>
              <p>
                The operator responsible for providing Revyn should
                be identified in the final published version of
                these terms.
              </p>
            </>
          ),
        },
        {
          title: "What Revyn does",
          content: (
            <>
              <p>
                Revyn is an AI-powered code review tool that analyzes
                authorized GitHub pull requests and helps surface
                potential bugs, security risks, and logic issues.
              </p>
              <p>
                Revyn provides suggestions and review feedback. It
                does not modify or rewrite your source code for you.
                It may publish review comments or other review
                results when those features are enabled.
              </p>
              <p>
                Revyn is an assistive tool, not a substitute for
                engineering judgment, testing, security audits, or
                human review.
              </p>
            </>
          ),
        },
        {
          title: "Accounts and GitHub access",
          content: (
            <>
              <p>
                You are responsible for maintaining the security
                of your account and for activities carried out
                through it, subject to applicable law.
              </p>
              <p>
                When connecting GitHub, you must have the authority
                to authorize access to the relevant repositories
                and information. You are responsible for selecting
                appropriate repository access and reviewing the
                permissions requested by the GitHub App.
              </p>
              <p>
                You must not use Revyn to access repositories or
                information without authorization.
              </p>
            </>
          ),
        },
        {
          title: "Acceptable use",
          content: (
            <>
              <p>You agree not to:</p>
              <ul className="list-disc space-y-2 pl-5 marker:text-orange-400">
                <li>Use Revyn for unlawful or unauthorized activities.</li>
                <li>Attempt to bypass authentication or access controls.</li>
                <li>Interfere with the availability or security of the service.</li>
                <li>Abuse the service, its APIs, or its infrastructure.</li>
                <li>Upload or process code you do not have permission to use.</li>
                <li>Misrepresent AI-generated findings as verified facts.</li>
                <li>Use the service in violation of third-party rights or applicable laws.</li>
              </ul>
            </>
          ),
        },
        {
          title: "AI review limitations",
          content: (
            <>
              <p>
                AI-generated findings may be incomplete, inaccurate,
                misleading, or incorrect. Revyn may fail to detect
                bugs, vulnerabilities, performance problems, or
                other issues.
              </p>
              <p>
                You are responsible for validating findings,
                running appropriate tests, reviewing changes, and
                deciding whether code is suitable for deployment.
              </p>
              <p>
                Do not rely solely on Revyn for security-critical,
                safety-critical, financial, or other high-impact
                decisions. Review findings in context before acting
                on them.
              </p>
            </>
          ),
        },
        {
          title: "Your code and content",
          content: (
            <>
              <p>
                You retain whatever rights you hold in the source
                code and other content you submit to Revyn.
              </p>
              <p>
                You authorize Revyn to access and process the
                information needed to provide the reviews you request,
                subject to the applicable Privacy Policy and the
                permissions you grant.
              </p>
              <p>
                This permission is limited to operating and providing
                the service; it does not transfer ownership of your
                source code to Revyn.
              </p>
              <p>
                You are responsible for ensuring that you have the
                necessary rights and permissions to submit code
                for processing by Revyn and its configured service
                providers.
              </p>
            </>
          ),
        },
        {
          title: "Pricing and availability",
          content: (
            <>
              <p>
                Revyn is currently offered free of charge. The
                service's pricing, usage limits, or available
                features may change in the future.
              </p>
              <p>
                If paid features or subscription plans are introduced,
                the applicable pricing and terms should be presented
                before you are charged.
              </p>
              <p>
                We may update, suspend, or discontinue features
                when reasonably necessary to maintain, secure, or
                improve the service, subject to applicable law.
                We do not guarantee uninterrupted availability.
              </p>
            </>
          ),
        },
        {
          title: "Third-party services",
          content: (
            <>
              <p>
                Revyn relies on third-party services, which may
                include GitHub, authentication providers, hosting
                platforms, and AI providers.
              </p>
              <p>
                Your use of those services may be subject to their
                own terms and policies. Revyn does not control
                third-party services and cannot guarantee their
                continued availability or performance.
              </p>
            </>
          ),
        },
        {
          title: "Suspension and termination",
          content: (
            <>
              <p>
                You may stop using Revyn and revoke its GitHub
                access through the relevant account or repository
                settings.
              </p>
              <p>
                Access may be suspended or terminated where
                reasonably necessary to address abuse, security
                risks, violations of these terms, or legal
                requirements.
              </p>
              <p>
                Ending access does not necessarily delete data
                already processed or stored. Refer to the Privacy
                Policy for information about retention and deletion.
              </p>
            </>
          ),
        },
        {
          title: "Disclaimers and liability",
          content: (
            <>
              <p>
                To the extent permitted by applicable law, Revyn
                is provided on an "as is" and "as available" basis.
                No guarantee is made that reviews will be accurate,
                complete, uninterrupted, or suitable for a
                particular purpose.
              </p>
              <p>
                To the extent permitted by law, the service operator
                will not be liable for indirect, incidental,
                special, consequential, or punitive losses arising
                from use of the service. Nothing in these terms
                excludes or limits liability that cannot legally
                be excluded or limited.
              </p>
              <p>
                These provisions must be reviewed for enforceability
                under the laws applicable to the service and its
                users. They do not remove any non-waivable consumer
                or statutory rights.
              </p>
            </>
          ),
        },
        {
          title: "Changes to these terms",
          content: (
            <p>
              These terms may be updated as the service evolves.
              The updated date will be changed when revisions are
              published. Where required by law, users will be
              notified of material changes or asked to accept
              updated terms.
            </p>
          ),
        },
        {
          title: "Governing law and contact",
          content: (
            <>
              <p>
                These terms are subject to the laws and jurisdiction
                that the service operator specifies in the final
                reviewed version, subject to applicable mandatory
                legal requirements.
              </p>
              <p>
                For questions about these terms, contact:
                {" "}
                <strong className="text-zinc-200">
                  pabitra05.maity@gmail.com
                </strong>
              </p>
            </>
          ),
        },
      ]}
    />
  );
}