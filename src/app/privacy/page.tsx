
import LegalPageLayout from "@/components/LegalPageLayout";

export default function PrivacyPage() {
  return (
    <LegalPageLayout
      eyebrow="Privacy"
      title="Privacy Policy"
      description="A clear explanation of how Revyn handles information when you connect GitHub repositories and use AI-powered code reviews."
      sections={[
        {
          title: "Introduction",
          content: (
            <>
              <p>
                Revyn is an AI-powered code review service that helps
                developers identify potential bugs, security risks, and
                logic issues in GitHub pull requests.
              </p>
              <p>
                This Privacy Policy explains how information may be
                collected, processed, stored, and shared when you use
                Revyn, its website, or its GitHub integration.
              </p>
              <p>
                Before publishing this policy, Revyn's operator should
                identify the legal entity or individual responsible for
                the service and confirm the practices described below.
              </p>
            </>
          ),
        },
        {
          title: "Information we process",
          content: (
            <>
              <p>
                Depending on the features you use and the permissions
                you authorize, Revyn may process the following
                categories of information:
              </p>
              <ul className="list-disc space-y-2 pl-5 marker:text-orange-400">
                <li>
                  <strong className="text-zinc-200">Account information:</strong>{" "}
                  identifiers and profile information received through
                  your authentication provider.
                </li>
                <li>
                  <strong className="text-zinc-200">GitHub information:</strong>{" "}
                  repository names, pull request metadata, commit
                  information, file changes, and review-related data
                  available to the GitHub App.
                </li>
                <li>
                  <strong className="text-zinc-200">Source code:</strong>{" "}
                  code diffs and relevant code context needed to
                  generate a review.
                </li>
                <li>
                  <strong className="text-zinc-200">Technical information:</strong>{" "}
                  diagnostic logs, timestamps, request information,
                  and error details where collected.
                </li>
                <li>
                  <strong className="text-zinc-200">Communications:</strong>{" "}
                  information you provide when contacting support.
                </li>
              </ul>
              <p>
                The exact information collected depends on the
                integrations, permissions, and features enabled in
                your deployment of Revyn.
              </p>
            </>
          ),
        },
        {
          title: "How we use information",
          content: (
            <>
              <p>Information may be used to:</p>
              <ul className="list-disc space-y-2 pl-5 marker:text-orange-400">
                <li>Authenticate users and manage their accounts.</li>
                <li>Retrieve authorized pull request information.</li>
                <li>Analyze code changes and generate review findings.</li>
                <li>Publish review comments when the feature is enabled.</li>
                <li>Maintain reliability, diagnose errors, and prevent abuse.</li>
                <li>Respond to support requests and meet legal obligations.</li>
              </ul>
              <p>
                Revyn provides review feedback rather than rewriting
                your source files. This does not mean that code or
                review data is never transmitted or stored during
                processing.
              </p>
            </>
          ),
        },
        {
          title: "AI processing and third-party services",
          content: (
            <>
              <p>
                Revyn may send relevant code diffs, code context, and
                review instructions to third-party AI providers to
                generate findings. The information sent depends on
                the review implementation and the providers configured
                by Revyn.
              </p>
              <p>
                <strong className="text-zinc-200">
                  Before using Revyn with private repositories, identify
                  the actual AI providers and link to their applicable
                  privacy and data-processing terms here.
                </strong>
              </p>
              <p>
                Third-party services may process information under
                their own terms and policies. Do not assume that code
                is excluded from provider retention or model-training
                practices unless the applicable provider terms and
                configuration confirm this.
              </p>
            </>
          ),
        },
        {
          title: "GitHub permissions and repository access",
          content: (
            <>
              <p>
                Revyn uses GitHub integration to access repository
                and pull request information needed to perform reviews.
                The information available to the service depends on
                the permissions granted during installation.
              </p>
              <p>
                Review the permissions requested by the Revyn GitHub
                App before installation. Grant access only to the
                repositories you intend to use, where GitHub makes
                that choice available.
              </p>
              <p>
                Revoking the GitHub App's access prevents future
                access through the revoked authorization, subject
                to any remaining authorizations or previously
                collected data. Revocation does not automatically
                guarantee deletion of data already stored.
              </p>
            </>
          ),
        },
        {
          title: "Storage and data retention",
          content: (
            <>
              <p>
                Information may be stored to support account
                management, review history, debugging, and service
                operation, depending on the features enabled.
              </p>
              <p>
                Revyn should publish its actual retention periods for
                source code, AI requests, review findings, logs, and
                account information before this policy goes live.
                Those periods may differ by data type and applicable
                legal requirements.
              </p>
              <p>
                Do not interpret this policy as a promise of immediate
                or automatic deletion. For deletion requests, contact
                the service operator using the support contact listed
                on this page.
              </p>
            </>
          ),
        },
        {
          title: "Data sharing and security",
          content: (
            <>
              <p>
                Information may be shared with infrastructure,
                authentication, monitoring, and AI service providers
                where necessary to operate Revyn. The actual providers
                should be identified in the published policy or a
                linked subprocessor list.
              </p>
              <p>
                Revyn should use appropriate safeguards for the
                information it handles. No online service or
                transmission method can be guaranteed to be completely
                secure.
              </p>
              <p>
                Revyn should not sell personal information unless
                its actual practices and applicable law support a
                different disclosure. Confirm the service's actual
                sharing practices before publishing this statement.
              </p>
            </>
          ),
        },
        {
          title: "Your choices and rights",
          content: (
            <>
              <p>
                Depending on your location and applicable law, you
                may have rights to request access to, correction of,
                deletion of, or information about the processing of
                your personal data.
              </p>
              <p>
                You can also review your GitHub App installations
                and manage repository access through GitHub settings.
                These actions may not remove information already
                retained by Revyn or its service providers.
              </p>
              <p>
                Contact the service operator to submit a privacy
                request. Requests will be handled in accordance
                with applicable legal requirements.
              </p>
            </>
          ),
        },
        {
          title: "Children and age requirements",
          content: (
            <p>
              Revyn is a developer tool and is not intended to be
              directed at children in circumstances where providing
              the service would violate applicable law. The operator
              should publish any age restrictions that apply to the
              service.
            </p>
          ),
        },
        {
          title: "Changes and contact",
          content: (
            <>
              <p>
                This policy may be updated as Revyn's features,
                integrations, or legal obligations change. The
                updated date above should be revised whenever
                material changes are made.
              </p>
              <p>
                For questions or privacy requests, contact:
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