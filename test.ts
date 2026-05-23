import { apiFetch } from '@/shared/api';
import { RepoDiff } from '@/widgets/review-submission/ui/ReviewDiff/ReviewMockRepository';
import { ReviewSubmissionClient } from '@/widgets/review-submission/ui/ReviewSubmissionClient/ReviewSubmissionClient';

interface ReviewSubmissionProps {
    params: {
        submissionId: string;
    };
}
